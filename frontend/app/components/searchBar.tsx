import { Search } from "lucide-react"; 
import { Equipment } from "@/types/equipement";
import { useState } from "react";
import { redirect } from "next/navigation";
import { GetEquipment } from "@/function/equipment/function";


export default function SearchBar() {
  const [element, setElement] = useState("");

  /* Probleme de complexite quand on cherche les equipements (lineaire) */
  const handleClick = async () => {
   
    //recuperer les equipements
    const { equipments }: { equipments: Equipment[] } = await GetEquipment();

    /*
        toLowerCase().replace(/\s/g, '').normalize() -> retire les espace, réecris en minuscule et normalise les deux chaines de caractère
    */
    const found = equipments.find(equipment => equipment.name.toLowerCase().replace(/\s/g, '').normalize() === element.toLowerCase().replace(/\s/g, '').normalize())
    if (found) {
        const id = found.id
        redirect(`/equipements/${id}`)
      
    } else {
        alert("Aucun équipement correspondant.")
        throw new Error("Aucun équipement correspondant.")
    }
  };

  return (
    <div>
      <h3 className="text-md font-semibold mb-2 flex items-center gap-2">
        <Search className="w-5 h-5 text-amber-600" />
        Rechercher
      </h3>

      <div className="flex flex-1 flex-col gap-2">
        <input
          type="text"
          placeholder="Rechercher..."
          className="p-2 border border-amber-400 rounded text-sm transition focus:outline-none focus:ring-2 focus:ring-amber-500"
          onChange={(e) => setElement(e.target.value)}
        />
        <button
          type="submit"
          className="border self-end border-black p-2 rounded transition duration-300 hover:border-amber-200"
          onClick={handleClick}
        >
          Rechercher
        </button>
      </div>
    </div>
  );
}