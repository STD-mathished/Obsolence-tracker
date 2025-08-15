// app/api/parts/route.ts
import { notFound } from "next/navigation";
import { Piece } from "@/types/pieces"
import { Equipment } from "@/types/equipement";

//afficher les equipements
export async function GetEquipementById({id} : {id:number}) {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!baseUrl) {
        throw new Error("NEXT_PUBLIC_API_URL n'est pas défini");
    }

    // REQUETE 1 - LES EQUIPEMENTS
    const equipRes = await fetch(`${baseUrl}/equipments`);
    if (!equipRes.ok) {
        throw new Error("Impossible de charger la liste des équipements");
    }
    const { equipments }: { equipments: Equipment[] } = await equipRes.json();
    const equipement = equipments.find((e) => e.id === id);
    if (!equipement) {
        notFound();
    }

    return equipement;

    
}

export async function GetPart(id:number) {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!baseUrl) {
        throw new Error("NEXT_PUBLIC_API_URL n'est pas défini");
    }
    // REQUETE 2 - LES PIECES
    const partsRes = await fetch(`${baseUrl}/equipments/${id}/parts`);
    if (!partsRes.ok) {
        notFound();
    }
    const data  = await partsRes.json();
    return data;
}


/* Calcul du score d'obsolescence --> stock = 10, indispo = 50 et obs = 90 */
export function calculerScore(pieces: Piece[]): number {
  const now = new Date();
  const scores = pieces.map((piece) => {
    let base = 0;
    switch (piece.status) {
      case "en stock":
        base = 10;
        break;
      case "indisponible":
        base = 50;
        break;
      case "obsolète":
        base = 90;
        break;
    }
    const date = new Date(piece.estimated_obsolescence_date);

    const diffJours = Math.max(
      0,
      Math.floor((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
    );

    const score = Math.min(100, base + diffJours);
    return score;
  });

  if (scores.length === 0) return 0;

  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
}

export function getNiveauRisque(score: number): string {
  if (score > 90) return "risque élevé"
  if (score > 50) return "risque modéré"
  if (score > 10) return "risque faible"
  return "risque négligeable"
}
