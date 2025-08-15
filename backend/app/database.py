import os
import sqlite3

# Chemins
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, "..", "greentrack.db")
SCHEMA_PATH = os.path.join(BASE_DIR, "schema.sql")

def get_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    # Activer les contraintes de cles 
    conn.execute("PRAGMA foreign_keys = ON;")
    return conn

def init_db():
    #Initialisation de la base 
    conn = get_connection()
    with open(SCHEMA_PATH, "r", encoding="utf-8") as f:
        conn.executescript(f.read())
    conn.commit()
    conn.close()

if __name__ == "__main__":
    init_db()
    print(f"Base de données initialisée dans : {DB_PATH}")
