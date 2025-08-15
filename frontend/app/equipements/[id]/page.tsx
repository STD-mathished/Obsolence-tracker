import ListePieces from "@/components/ListePieces"
import { Piece } from "@/types/pieces"
import { GetEquipementById, GetPart, calculerScore, getNiveauRisque } from "@/function/part/function";
import { Equipment } from "@/types/equipement";

import Link from "next/link"

interface Props {
  params: { id: string };
}


export default async function FicheEquipement({ params }: Props) {
  const id = parseInt(params.id, 10);
    const equipement: Equipment = await GetEquipementById({ id });
    const { parts }: { parts: Piece[] } = await GetPart(id);

  // Calcul du score et détermination du niveau de risque
  const score = calculerScore(parts);
  const niveauRisque = getNiveauRisque(score);

  function getBadgeClasses(score: number): string {
    if (score > 90)   return "bg-red-200 text-red-800";
    if (score > 50)   return "bg-yellow-200 text-yellow-800";
    if (score > 10)   return "bg-green-200 text-green-800";
    return "bg-gray-200 text-gray-800";
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <Link href="/equipements" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Retour à la liste des équipements
      </Link>

      <h1 className="text-2xl font-bold mb-4">{equipement.name}</h1>

      <div className="mt-8 space-y-2 text-gray-800 text-sm sm:text-base">
        <p><strong>Code :</strong> {equipement.code}</p>
        <p><strong>Date de début :</strong> {equipement.commissioning_date}</p>
        <p><strong>Statut :</strong> <span
            className={`inline-block px-2 py-1 rounded text-black ${getBadgeClasses(score)}`}
          >
            {niveauRisque}
          </span></p>
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">Pièces associées</h2>
      <ListePieces pieces={parts} />

      <div className="mt-6 text-gray-700">
        <p><strong>Score d'obsolescence moyen :</strong> {score}</p>
      </div>
    </main>
  );
}
