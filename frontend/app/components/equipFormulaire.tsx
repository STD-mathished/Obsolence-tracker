'use client'
import {motion} from 'framer-motion'
import React, {
  useState,
  ChangeEvent,
  FormEvent
} from "react";
import { FormEquipment } from "@/types/formEquipement";
import { PostEquipment } from '@/function/equipment/function';

interface Props {
  onCreated?: (newEquip: FormEquipment) => void;
}

export default function EquipFormulaire({
  onCreated
}: Props) {

  const [form, setForm] = useState<FormEquipment>({
    name: "",
    code: "",
    commissioning_date: "",
    status: ""
  });

  // pour tout changement, actualiser le champ correspondant de l'element form
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }


  //envoyer la requete
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // soumission du formulaire
    await PostEquipment({form, setForm})

  }


  return (
    <motion.div 
      className="p-6 bg-white rounded-2xl max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 20 }}    
      animate={{ opacity: 1, y: 0 }}     
      transition={{ duration: 0.5 }} 
    >
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >

        {/* Nom */}
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="mb-2 font-semibold text-gray-700"
          >
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        {/* Code */}
        <div className="flex flex-col">
          <label
            htmlFor="code"
            className="mb-2 font-semibold text-gray-700"
          >
            Code
          </label>
          <input
            id="code"
            name="code"
            type="text"
            value={form.code}
            onChange={handleChange}
            required
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        {/* Date de mise en service */}
        <div className="flex flex-col">
          <label
            htmlFor="commissioning_date"
            className="mb-2 font-semibold text-gray-700"
          >
            Date de mise en service
          </label>
          <input
            id="commissioning_date"
            name="commissioning_date"
            type="date"
            value={form.commissioning_date}
            onChange={handleChange}
            required
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        {/* Statut */}
        <div className="flex flex-col">
          <label
            htmlFor="status"
            className="mb-2 font-semibold text-gray-700"
          >
            Statut
          </label>
          <select
            id="status"
            name="status"
            value={form.status}
            onChange={handleChange}
            required
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
              <option value="" disabled>Sélectionnez un statut…</option>
              <option value="Risque faible">Risque faible</option>
              <option value="Risque modéré">Risque modéré</option>
              <option value="Risque élevé">Risque élevé</option>
          </select>
        </div>

        {/* Bouton Envoyer */}
        <div className="md:col-span-2 flex justify-end mt-4">
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Enregistrer
          </button>
        </div>
      </form>
    </motion.div>
  );
}
