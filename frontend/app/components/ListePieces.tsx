"use client";

import { Piece } from "@/types/pieces";
import { motion, scale } from "framer-motion";



interface Props {
  pieces: Piece[];
}

export default function ListePieces({ pieces }: Props) {
  if (pieces.length === 0) {
    return <p>Aucune pièce enregistrée.</p>;
  }

  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {pieces.map((piece) => (
        <motion.li
        whileTap={{scale:0.9}}
          whileHover={{scale:1.01,
            transition: {duration:1},
          }
          
        }
        key={piece.id} className="border rounded-lg p-4 bg-white shadow" >
          <p className="font-semibold">Référence : <span className="font-normal">{piece.reference}</span></p>
          <p className="font-semibold">Statut : <span className="font-normal">{piece.status}</span></p>
          <p className="font-semibold">Obsolescence estimée : <span className="font-normal">{piece.estimated_obsolescence_date}</span></p>
          <p className="font-semibold">Fabricant : <span className="font-normal">{piece.manufacturer}</span></p>
          <p className="font-semibold">Modèle : <span className="font-normal">{piece.model}</span></p>
          <p className="font-semibold">Année de fabrication : <span className="font-normal">{piece.manufacture_year}</span></p>
          <p className="font-semibold">Numéro de série : <span className="font-normal">{piece.serial_number}</span></p>
          <p className="font-semibold">Nombre de fournisseur : <span className="font-normal">{piece.supplier_count}</span></p>
          <p className="font-semibold">Alternative identifée :  { piece.alternative_identified === 0 ? <span className="font-normal">Non</span> : <span className="font-normal">Oui</span>}</p>
          <p className="font-semibold">Disponibilité aftermarket :  { piece.aftermarket_available === 0 ? <span className="font-normal">Non</span> : <span className="font-normal">Oui</span>}</p>
        </motion.li>
      ))}
    </ul>
  );
}
