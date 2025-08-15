from pydantic import BaseModel
from datetime import date

class EquipmentCreate(BaseModel):
    name: str
    code: str
    commissioning_date: date
    status: str


class PartCreate(BaseModel):
    reference: str
    status: str
    estimated_obsolescence_date: date
    manufacturer: str
    model: str
    manufacture_year: int
    serial_number: str
    supplier_count: int
    alternative_identified: bool
    aftermarket_available: bool