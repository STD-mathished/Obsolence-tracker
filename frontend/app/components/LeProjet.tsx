'use client'
import {motion} from 'framer-motion'

export default function LeProjet() {
    return (
        <motion.section 
          id="leProjet"
          className="py-20 px-6 bg-gray-100 animate-fade-in-up delay-200"
          initial={{ opacity: 0, scale:0.99 }}
          whileInView={{ opacity: 1, scale:1}}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}   
          >
  <div className="max-w-4xl mx-auto text-center">
    <h3 className="text-3xl font-bold mb-6 text-amber-600">Le projet</h3>
    <p className="text-gray-700 leading-relaxed text-lg mb-4">
      L’objectif est de concevoir une application SaaS dédiée à la cartographie (M1) et au diagnostic d’obsolescence (M2) d’équipements et de leurs pièces détachées, avec une évaluation fine de leur criticité.
    </p>
    <p className="text-gray-700 leading-relaxed text-lg mb-4">
      La stack technique utilisée assure l'évolutivité et apporte une bonne expérience utilisateur. Elle s’appuie sur les technologies suivantes :
    </p>
    <ul className="text-left list-disc list-inside text-gray-700 text-base max-w-md mx-auto mb-4">
      <li><strong>Next.js (App Router)</strong> — côté serveur et client, optimisée pour le SEO et la performance</li>
      <li><strong>TypeScript</strong> — faciliter la collaboration et prévenir les erreurs à la compilation</li>
      <li><strong>Tailwind CSS</strong> — design rapide, réactif</li>
      <li><strong>React</strong> —construire des interfaces basées sur des composants réutilisables</li>
      <li><strong>GitHub</strong> — pour le versioning et la collaboration en équipe</li>
      <li><strong>FastAPI</strong> — créer une API backend rapide et performante pour gérer les données et la logique métier</li>
      <li><strong>Framer Motion</strong> — ajouter des animations fluides et interactives aux composants pour améliorer l’expérience utilisateur</li>
      <li><strong>SQLite</strong> — stocker et gérer les données de manière légère et embarquée dans le projet</li>
    </ul>
    <p className="text-gray-700 text-lg">
      Cette stack me permet de bâtir une plateforme moderne tout en respectant les meilleures pratiques du développement web.
    </p>
  </div>
</motion.section>

    )
}