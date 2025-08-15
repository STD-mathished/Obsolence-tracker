'use client' 
import {motion} from "framer-motion"
export default function Apropos() {
    return(
        <motion.section 
          id="aPropos" 
          className="py-20 px-6 bg-white animate-fade-in-up delay-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}   
          >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 text-amber-600">À  propos</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Cette application web simule un système de suivi des équipements techniques avec gestion des pièces détachées et calcul de leur obsolescence.
          </p>
        </div>
      </motion.section>
    )
}