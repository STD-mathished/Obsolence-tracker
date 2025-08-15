'use client'
import PieceForm from "@/components/pieceForm";
import { useState } from "react";
import { Plus } from "lucide-react";

export default function AjouterPiece() {
    const [pieces, setPieces] = useState<number[]>([]);

  // click : on ajoute un nouvel index
  const addPiece = () => {
    setPieces((prev) => [...prev, Date.now()]); // Date.now() pour un key unique
  };

    return(
        <main className="max-w-3xl mx-auto p-6 space-y-6">
            <h2 className="text-2xl font-bold mb-4">
                Ajouter une pièce
            </h2>
            <PieceForm/>
      </main>
    )
}