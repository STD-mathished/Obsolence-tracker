# Phase 3 – Gestion d’équipements (Next.js + TypeScript + Tailwind CSS)

Ce projet est une mini-application développée avec **Next.js**, **TypeScript** et **Tailwind CSS**. Dans le cadre d'un recrutement 

##  Fonctionnalités

-  Redirection automatique de `/` vers `/main`
-  Affichage de la liste des équipements
-  Détail de chaque équipement avec :
    - Score d’obsolescence
    - Liste des pièces détachées
    - Dashboard 

## Score d’obsolescence

Le score est calculé en fonction de l’état des pièces :
- Pièce en stock : +10
- Pièce indisponible : +50
- Pièce obsolète : +90

## Ce qu'il reste à faire 
Pour compléter le projet il manque :
 - Intégrer une fonctionnalité de recherche active dans le dahsboard✅
 - Animer les differentes sections du site✅
 - Créer, structurer la base de données✅
 - Réaliser l'API avec fastAPI✅
 - Relier le front-end avec le backend✅
 - Faire des tests ✅ ??
 - Réaliser un responsive plus poussé pour que les utilisateurs mobiles puissent également utiliser✅
 - Ajouter la possibilité de créer des fiches ✅
 - Rendre les liens du header clickable ✅
 
##  Lancer le projet

Ouvrir le dossier 'frontend' et creer un fichier nommé '.env.local'. Insérez y ces deux variables :

    NEXT_PUBLIC_API_URL=http://localhost:8000

    NEXT_PUBLIC_BASE_URL = http://localhost:3000

Puis dans un terminal, exécuter :
- cd ./frontend
- npm install
- npm run dev

Dans un autre terminal, exécuter :
- pip install "uvicorn[standard]" 
- cd ./backend/app
- uvicorn main:app --reload
