PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS equipments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    code TEXT NOT NULL UNIQUE,
    commissioning_date TEXT NOT NULL,
    status TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS parts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    equipment_id INTEGER NOT NULL,
    reference TEXT NOT NULL,
    status TEXT NOT NULL,
    estimated_obsolescence_date TEXT NOT NULL,
    manufacturer TEXT NOT NULL,
    model TEXT NOT NULL,
    manufacture_year INTEGER,
    serial_number TEXT NOT NULL,
    supplier_count INTEGER,
    alternative_identified BOOLEAN,
    aftermarket_available BOOLEAN,
    FOREIGN KEY (equipment_id) REFERENCES equipments(id) ON DELETE CASCADE
);
