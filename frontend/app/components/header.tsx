'use client'
import {motion} from 'framer-motion'
import Link from "next/link"
export default function Header() {
    return(
        <motion.nav 
          className="bg-white shadow-md sticky top-0 z-10"
          initial={{ opacity: 0, y: 20 }}    
          animate={{ opacity: 1, y: 0 }}     
          transition={{ duration: 0.5 }}     
        >
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/main">
                <h1 className="text-xl font-bold text-amber-600">Phase 3</h1>
            </Link>

          <div className="space-x-6 text-sm md:text-base">
            <Link href="/equipements" className="text-gray-700 hover:text-amber-600 transition">Dashboard</Link>
            <a href="/main#aPropos" className="text-gray-700 hover:text-amber-600 transition">À propos</a>
            <a href="/main#leProjet" className="text-gray-700 hover:text-amber-600 transition">Le projet</a>
          </div>
        </div>
      </motion.nav>
    )
}