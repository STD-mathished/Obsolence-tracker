'use client'

import Link from "next/link";
import { Boxes } from "lucide-react";
import { PackagePlus } from 'lucide-react'; 
import { Box } from 'lucide-react';
import SearchBar from "./searchBar";
import {motion} from 'framer-motion'

export default function Sidebar() {
  return (
    <motion.aside 
      className="w-64 min-h-screen bg-gray-100 p-6 border-r flex flex-col gap-6"
      initial={{ opacity: 0, y: 20 }}    
      animate={{ opacity: 1, y: 0 }}      
      transition={{ duration: 0.5 }}      
      >
      <SearchBar/>
      <div>
        <h2 className="text-lg font-bold mb-4">Panneau de bord</h2>
        <ul className="text-sm text-gray-800 flex flex-col gap-3">
          <li className="flex items-center gap-2">
            <Boxes className="w-5 h-5 text-amber-600" />

            <Link href="/equipements" className="hover:text-amber-600 transition">
              Voir les équipements
            </Link>
          
          </li>

          <li className="flex items-center gap-2">
            <PackagePlus className="w-5 h-5 text-amber-600"/>

            <Link href="/equipements/ajouterEquipement" className="hover:text-amber-600 transition">
              Ajouter un équipement
            </Link>
          </li>

          <li className="flex items-center gap-2">
            <Box className="w-5 h-5 text-amber-600"/>

            <Link href="/equipements/ajouterPiece" className="hover:text-amber-600 transition">
              Ajouter une pièce
            </Link>
            
          </li>
        </ul>
      </div>
    </motion.aside>
  );
}
