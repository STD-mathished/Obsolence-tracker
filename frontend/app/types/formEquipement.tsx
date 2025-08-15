export type EquipmentStatus = "" |"Risque faible" | "Risque modéré" | "Risque élevé";

export interface FormEquipment {
  name: string;
  code: string;
  commissioning_date: string;
  status: EquipmentStatus;
}