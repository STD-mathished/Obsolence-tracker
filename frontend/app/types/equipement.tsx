export type EquipmentStatus = "Risque faible" | "Risque modéré" | "Risque élevé";

export interface Equipment {
  id: number;
  name: string;
  code: string;
  commissioning_date: string;
  status: EquipmentStatus;


}