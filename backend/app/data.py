#fichier qui gere les donnees de la base
# seed.py

from database import get_connection, init_db

def seed():
    # (Re)initialise la base
    init_db()
    conn = get_connection()
    cur  = conn.cursor()

    # --- ÉQUIPEMENTS (nouveau schéma : id auto, name, code, commissioning_date, status)
    equipements = [
        ("Compresseur d'air",   "EQ-AIR001", "2018-06-15", "Risque faible"),
        ("Pompe hydraulique",   "EQ-HYD002", "2019-03-22", "Risque modéré"),
        ("Tour CNC",            "EQ-CNC003", "2020-11-05", "Risque faible"),
        ("Générateur Diesel",   "EQ-DIE004", "2017-01-30", "Risque élevé"),
        ("Convoyeur à bande",   "EQ-CON005", "2021-08-12", "Risque modéré"),
        ("Broyeur à marteaux",  "EQ-BRO006", "2016-05-20", "Risque élevé"),
        ("Tournevis électrique","EQ-ELC007","2022-02-14", "Risque faible"),
        ("Chariot élévateur",   "EQ-FOX008", "2015-09-01", "Risque élevé"),
        ("Scie à ruban",        "EQ-SAW009", "2020-12-10", "Risque modéré"),
        ("Machine de soudure",  "EQ-WEL010", "2019-07-18", "Risque faible"),
    ]
    cur.executemany(
        "INSERT INTO equipments (name, code, commissioning_date, status) VALUES (?, ?, ?, ?)",
        equipements
    )

    # --- PIÈCES (nouveau schéma : id auto, equipment_id, reference, status, estimated_obsolescence_date,
    #     manufacturer, model, manufacture_year, serial_number, supplier_count, alternative_identified, aftermarket_available)
    pieces = [
        (1,  "CMP-001-A", "en stock",    "2026-06-01", "Atlas Copco",    "Seal-Kit",     2018, "PK-AC-001", 2, False, True),
        (1,  "CMP-001-B", "indisponible","2026-07-15", "SKF",             "Bearing-6205", 2018, "BRG-6205-AC",1, True,  False),

        (2,  "PMP-002-A", "en stock",    "2027-03-22", "Bosch Rexroth",  "Valve-4WE6",   2019, "VLX-4W-002", 2, False, True),
        (2,  "PMP-002-B", "obsolète",    "2025-12-01", "Eaton",           "Seal-PS",      2019, "SL-PS-002",  1, False, False),

        (3,  "CNC-003-A", "en stock",    "2028-11-05", "DMG Mori",        "Toolholder",   2020, "TH-DM-003",  1, True,  True),
        (3,  "CNC-003-B", "indisponible","2028-12-20", "Sandvik",         "Insert-VCGT",  2020, "INS-VC-003", 1, False, True),

        (4,  "GEN-004-A", "obsolète",    "2024-01-30", "Caterpillar",     "Filter-Diesel",2017, "FL-CT-004",  3, False, False),
        (4,  "GEN-004-B", "en stock",    "2027-02-01", "Donaldson",       "Gasket-K",     2017, "GK-DN-004",  2, True,  True),

        (5,  "CON-005-A", "en stock",    "2026-08-12", "Siemens",         "Roller-450",   2021, "RL-SI-005",  2, False, True),
        (5,  "CON-005-B", "indisponible","2026-09-15", "Interroll",       "Belt-XL",      2021, "BT-IR-005",  1, True,  False),

        (6,  "BRO-006-A", "obsolète",    "2023-05-20", "Metso",           "Hammer-Set",   2016, "HZ-ME-006",  2, False, False),
        (6,  "BRO-006-B", "en stock",    "2029-06-01", "FLSmidth",        "Screen-Mesh",  2016, "SM-FL-006",  1, True,  True),

        (7,  "ELC-007-A", "en stock",    "2027-02-14", "Makita",          "Battery-18V",  2022, "BAT-MK-007", 3, False, True),
        (7,  "ELC-007-B", "indisponible","2025-11-30", "Panasonic",       "Charger-DC18RC",2022,"CH-PA-007",1, False, True),

        (8,  "FLT-008-A", "indisponible","2025-09-01", "Toyota",          "Fork-Tine",    2015, "FT-TO-008",  2, True,  False),
        (8,  "FLT-008-B", "en stock",    "2028-10-10", "Hyster",          "Hydraulic-Hose",2015,"HH-HY-008",1, False, True),

        (9,  "SAW-009-A", "en stock",    "2026-12-10", "Lenox",           "Blade-24\"",   2020, "BL-LN-009",  2, False, True),
        (9,  "SAW-009-B", "indisponible","2027-03-05", "Starrett",        "Guide-Roller", 2020, "GR-ST-009",  1, True,  False),

        (10, "WEL-010-A", "en stock",    "2029-07-18", "Lincoln Electric","Wire-Spool",   2019, "WS-LE-010",  1, True,  True),
        (10, "WEL-010-B", "obsolète",    "2024-08-01", "Miller Electric", "Tip-Nozzle",   2019, "TN-MI-010",  2, False, False),
    ]
    cur.executemany(
        "INSERT INTO parts (equipment_id, reference, status, estimated_obsolescence_date, manufacturer, model, manufacture_year, serial_number, supplier_count, alternative_identified, aftermarket_available) "
        "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        pieces
    )

    # Valide et ferme
    conn.commit()
    conn.close()
    print("10 équipements et 20 pièces insérés avec succès")

if __name__ == "__main__":
    seed()
