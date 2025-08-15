'use client'
import Link from "next/link"
import {motion} from 'framer-motion'
export default function HeroPage() {
    return(
      <motion.section 
        className="flex-1 flex flex-col items-center justify-center text-center bg-gray-50 py-20 px-4 animate-fade-in-up min-h-screen"
          initial={{ opacity: 0, y: 20 }}    
          animate={{ opacity: 1, y: 0 }}     
          transition={{ duration: 0.5 }}    
      >
        <h2 className="text-4xl font-bold text-amber-600 mb-4">Bienvenue à vous</h2>
        <p className="text-gray-700 max-w-xl mb-6">
          Cette application a été conçue pour visualiser les équipements, leurs pièces détachées et leur score d’obsolescence.  <i> Concu dans le cadre d'un projet d'alternance</i>
        </p>
        <Link
          href="/equipements"
          className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition"
        >
          Accéder au Dashboard
        </Link>
      </motion.section>
    )
}