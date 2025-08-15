"use client";

import { useState, useEffect, FormEvent } from "react";
import type { Equipment } from "@/types/equipement";
import { GetEquipment } from "@/function/equipment/function";
import {motion} from 'framer-motion'

export default function PieceForm() {
  const [equipmentsList, setEquipmentsList] = useState<Equipment[]>([])

  async function loadPage (){
    const { equipments }: { equipments: Equipment[] } = await GetEquipment()
     setEquipmentsList(equipments);
  }
   

  //exécution au chargement de la page
  useEffect(() => {
    loadPage()
  }, []);

/* CREATION DE L'OBJET */
  const [ref,setRef] = useState('')
  const [status,setStatus] = useState('')
  const [obs_date, setObsDate] = useState('')
  const [model,setModel] = useState('')
  const [manufacturer,setManufacturer] = useState('')
  const [manufacture_year, setManufactureYear] = useState<number>()
  const [serial_number, setSerialNumber] = useState('')
  const [nb_supplier,setNbSupplier] = useState<number>()
  const [equip_id, setEquipId] = useState<number | undefined>(undefined)

  //convertion de aftermaket et alternative en boolean
  const [alternativeIdentified, setAlternativeIdentified] = useState(false)
  const [aftermarketAvailable, setAftermarketAvailable] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const found = equipmentsList.find(eq => eq.id === equip_id);
    if(!found) {
      alert("Veuillez selectionner un équipement")
      return
    }

   const payload = {
    equipment_id: found.id, 
    reference: ref,
    status: status,
    estimated_obsolescence_date: obs_date || null,
    manufacturer: manufacturer,
    model: model,
    manufacture_year: manufacture_year ?? null,
    serial_number: serial_number,
    supplier_count: nb_supplier ?? null,
    alternative_identified: alternativeIdentified, 
    aftermarket_available: aftermarketAvailable  
};

    try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/equipments/${found.id}/parts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const text = await res.text()
    if (!res.ok) {
      console.error("HTTP", res.status, text)
      alert(`Erreur API (${res.status}) : ${text}`);
    return;
    }

    alert("Pièce ajoutée avec succès !");
  } catch (err) {
    console.error("Network/JS error:", err);
    alert("Erreur réseau/JS (voir console)");
  }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 shadow-xl p-2"
      initial={{ opacity: 0, y: 20 }}    
      animate={{ opacity: 1, y: 0 }}     
      transition={{ duration: 0.5 }}   
    >

      <div className=''>
        <label className="block text-sm font-medium mb-1" htmlFor="reference">
          Référence
        </label>
        <input
          id="reference"
          type="text"
          name="reference"
          onChange={(e) => setRef(e.target.value)}
          className="w-full border rounded p-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="status">
          Statut
        </label>
        <select
          id="status"
          name="status"
         onChange={(e) => setStatus(e.target.value)}
          className="w-full border rounded p-2"
        >
          <option value="en stock">En stock</option>
          <option value="indisponible">Indisponible</option>
          <option value="obsolète">Obsolète</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="estimated_obsolescence_date">
          Date d'obsolescence estimée
        </label>
        <input
          id="estimated_obsolescence_date"
          type="date"
          name="estimated_obsolescence_date"
         onChange={(e) => setObsDate(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="manufacturer">
          Fabricant
        </label>
        <input
          id="manufacturer"
          type="text"
          name="manufacturer"
          onChange={(e) => setManufacturer(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="model">
          Modèle
        </label>
        <input
          id="model"
          type="text"
          name="model"
        onChange={(e) => setModel(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="manufacture_year">
          Année de fabrication
        </label>
        <input
          id="manufacture_year"
          type="number"
          name="manufacture_year"
          value={manufacture_year ?? ""} // --> pour eviter d'envoyer un champ vide qui ne peut pas etre transforme en nombre
          onChange={(e) => setManufactureYear(e.target.valueAsNumber)}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="serial_number">
          Numéro de série
        </label>
        <input
          id="serial_number"
          type="text"
          name="serial_number"
          value={serial_number ?? ""}
          onChange={(e) => setSerialNumber(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="supplier_count">
          Nombre de fournisseurs
        </label>
        <input
          id="supplier_count"
          type="number"
          name="supplier_count"
          onChange={(e) => setNbSupplier(e.target.valueAsNumber)}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="status">
          Equipement
        </label>
        <select
          id="equipment"
          name="equipment"
          value={equip_id ?? ""} 
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setEquipId(e.target.value ? Number(e.target.value) : undefined)
          }
          className="w-full border rounded p-2"
        >
          <option value="">Sélectionnez un équipement</option>
          {equipmentsList.map((equipment: Equipment) => (
            <option key={equipment.id} value={equipment.id}> 
              {equipment.name}
            </option>
          ))}
</select>

      </div>  

      <div className="flex items-center space-x-2">
        <input
          id="alternative_identified"
          type="checkbox"
          name="alternative_identified"
          onChange={(e) => setAlternativeIdentified(e.target.checked)}
          className="h-4 w-4"
        />
        <label htmlFor="aftermarket_available" className="text-sm font-medium">
          Alternative identifiée
        </label>
      </div>

      <div className="flex items-center space-x-2">
        <input
          id="aftermarket_available"
          type="checkbox"
          name="aftermarket_available"
          onChange={(e) => setAftermarketAvailable(e.target.checked)}
          className="h-4 w-4"
        />
        <label htmlFor="aftermarket_available" className="text-sm font-medium">
          Aftermarket disponible
        </label>
      </div>
      
      

      <div className="md:col-span-2 flex justify-end mt-4">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Sauvegarder
        </button>
      </div>

      
      
    </motion.form>
  )
}