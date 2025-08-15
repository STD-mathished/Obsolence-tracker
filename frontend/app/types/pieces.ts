export type PartStatus = "en stock" | "indisponible" | "obsolète";

export interface Piece {
  id: number;
  reference: string;
  status: PartStatus;
  estimated_obsolescence_date: string;

  manufacturer: string;
  model: string;
  manufacture_year: number;
  serial_number: string;
  supplier_count: number;
  alternative_identified: number;
  aftermarket_available: number;
}
