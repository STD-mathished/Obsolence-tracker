export type PartStatus = "en stock" | "indisponible" | "obsolète";

// types/formPiece.ts

export interface Piece {
  id: number;
  equipment_id: number;
  reference?: string;
  status?: PartStatus;
  estimated_obsolescence_date?: string;
  manufacturer?: string;
  model?: string;
  manufacture_year?: number;
  serial_number?: string;
  supplier_count?: number;
  alternative_identified?: boolean;
  aftermarket_available?: boolean;
}

export type CreatePiece = Omit<Piece, "id">;

