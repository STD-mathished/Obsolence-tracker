from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from database import get_connection
from models import EquipmentCreate,PartCreate  



app = FastAPI()

# CORS -- Autoriser les requetes depuis le localhost --


origins = [
    "http://localhost:3000",   
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    #allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {
        "message": "Welcome to the root of the PHASE 3 api !",
        "available_routes": "/equipments | /equipments/{equipment_id}/parts"
    }

@app.get("/equipments")
def get_equipments():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM equipments") 
    rows = cursor.fetchall()
    conn.close()

    equipments = [dict(row) for row in rows]
    return {"equipments": equipments}


@app.get("/equipments/{equipment_id}/parts")
def get_equipment_parts(equipment_id: int): # attention dans bd c'est un str
    conn = get_connection()
    cursor = conn.cursor()

    # Verifier si l'id existe
    cursor.execute("SELECT * FROM equipments WHERE id = ?", (equipment_id,))
    equipment = cursor.fetchone()
    if not equipment:
        conn.close()
        # lever une exception s'il nexiste pas
        raise HTTPException(status_code=404, detail="Lid specifie est introuvable")

    # Executer la commande pour recuprer les pieces associees
    cursor.execute("SELECT * FROM parts WHERE equipment_id = ?", (equipment_id,))
    parts = cursor.fetchall()
    conn.close()

    # AFFICHER LE RESULTAT
    parts_list = [dict(row) for row in parts]
    return {
        "equipment_id": equipment_id,
        "parts": parts_list
    }


@app.post("/equipments")
def create_equipment(equipment:EquipmentCreate):
    conn = get_connection()
    cursor = conn.cursor()

    try:
        cursor.execute(
            """
            INSERT INTO equipments (name, code, commissioning_date, status)
            VALUES (?, ?, ?, ?)
            """,
            (
                equipment.name,
                equipment.code,
                equipment.commissioning_date.isoformat(),
                equipment.status,
            )
        )
        #validation de la transaction après qu'elle ait reussi
        conn.commit()

    except Exception as e:
        #rollback si elle n'a pas abouti
        conn.rollback()
        raise HTTPException(status_code=400)
    finally:
        conn.close()

    data = equipment.model_dump()      
    return  "L'équipement a bien été ajouté "


@app.post("/equipments/{equipment_id}/parts", status_code=201)
def create_part(equipment_id: int, part: PartCreate):
    conn = get_connection()
    cursor = conn.cursor()

    # verifier que l'équipement existe
    cursor.execute("SELECT 1 FROM equipments WHERE id = ?", (equipment_id,))
    if not cursor.fetchone():
        conn.close()
        raise HTTPException(status_code=404)

    try:
        cursor.execute(
            """
            INSERT INTO parts (
                equipment_id,
                reference,
                status,
                estimated_obsolescence_date,
                manufacturer,
                model,
                manufacture_year,
                serial_number,
                supplier_count,
                alternative_identified,
                aftermarket_available
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                equipment_id,
                part.reference,
                part.status,
                part.estimated_obsolescence_date.isoformat(),
                part.manufacturer,
                part.model,
                part.manufacture_year,
                part.serial_number,
                part.supplier_count,
                part.alternative_identified,
                part.aftermarket_available
            )
        )
        conn.commit()
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=400)
    finally:
        conn.close()

    return "La pièce a bien été ajoutée"