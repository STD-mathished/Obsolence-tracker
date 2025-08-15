'use client'
import { getNiveauRisque } from "@/equipements/[id]/page";
import { FC } from "react"

const BadgeScore: FC<{ score: number }> = ({ score }) => {
  const niveau = getNiveauRisque(score);
  return (
    <span className="px-2 py-1 rounded-full bg-gray-100 text-sm">
      {niveau}
    </span>
  );
};

export default BadgeScore;
