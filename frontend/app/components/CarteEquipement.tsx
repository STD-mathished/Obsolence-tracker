"use client";


import { Equipment } from "@/types/equipement"
import Link from "next/link"
import { motion } from "framer-motion";

interface Props {
  equipment: Equipment;
}

export default function EquipmentCard({ equipment }: Props) {
  return (
    <Link href={`/equipements/${equipment.id}`}>
      <motion.div
        className="border p-4 rounded-lg shadow-sm bg-white hover:bg-amber-100 transition duration-700 ease-in-out"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
        layout
      >
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">{equipment.name}</h2>
        </div>
        <p className="text-sm text-gray-600">Code : {equipment.code}</p>
        <p className="text-sm text-gray-600">Mise en service : {equipment.commissioning_date}</p>
      </motion.div>
    </Link>
  );
}
