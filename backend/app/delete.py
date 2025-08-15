from database import get_connection

conn = get_connection()
cur  = conn.cursor()

print(f" \n--------------------REQUETE 1-----------------------\n")
"""
    tous les equipements
"""
cur.execute("SELECT * FROM equipments")
equipments = cur.fetchall()

#AFFICHER LE RESULTAT
for equipment in equipments:
    print(dict(equipment))

print(f"\n--------------------REQUETE 2-----------------------\n")
del_code = "X-test" 
cur.execute("DELETE FROM equipments WHERE code = ?", (del_code,))
conn.commit()

cur.execute("SELECT * FROM equipments")
equipments = cur.fetchall()

#AFFICHER LE RESULTAT
for equipment in equipments:
    print(dict(equipment))



conn.close()