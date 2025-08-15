from database import get_connection

conn = get_connection()
cur  = conn.cursor()


print(f" \n--------------------REQUETE 1-----------------------\n")
"""
    selectionne tous les pieces de l'equipement 8
"""
cur.execute("SELECT * FROM parts WHERE equipment_id = ?", (8,))
parts_for_8 = cur.fetchall()

# AFFICHER LE RESULTAT
for part in parts_for_8:
    print(dict(part))


print(f" \n--------------------REQUETE 2-----------------------\n")
"""
    COMPTE tous les equipements qui ont la piece 3
"""
cur.execute("SELECT COUNT(*) AS NbOccurrences FROM parts WHERE id = ?",(3,))
equipment_for_3 = cur.fetchall()

#AFFICHER LE RESULTAT
for equipment in equipment_for_3:
    print(dict(equipment))


print(f" \n--------------------REQUETE 3-----------------------\n")
"""
    Verifier qu'il y a bien 15 equipements
"""
cur.execute("SELECT COUNT(*) AS total_equipements FROM equipments")
nb_equipments = cur.fetchone()[0]

#AFFICHER LE RESULTAT
print(f"Il y a {nb_equipments} equipements dans la base")



print(f" \n--------------------REQUETE 4-----------------------\n")
"""
    reecuperer les pieces pour l'element 8
"""

cur.execute(
    "SELECT reference, status, estimated_obsolescence_date FROM parts WHERE equipment_id = ?",(8,)
)
parts = cur.fetchall()
for p in parts:
    print(dict(p))
print(f"Nombre de pièces pour l'équipement 8 est de  {len(parts)}")  


print(f" \n--------------------REQUETE 5-----------------------\n")
"""
    tous les equipements
"""
cur.execute("SELECT * FROM equipments")
equipments = cur.fetchall()

#AFFICHER LE RESULTAT
for equipment in equipments:
    print(dict(equipment))

print(f"\n--------------------REQUETE 6-----------------------\n")
del_code = "string" #la doc fastApi lors du test donne ce code
cur.execute("DELETE FROM equipments WHERE code = ?", (del_code,))
conn.commit()
cur.execute("SELECT * FROM equipments")
equipments = cur.fetchall()

#AFFICHER LE RESULTAT
for equipment in equipments:
    print(dict(equipment))



conn.close()

