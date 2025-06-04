EasyPizza — Application de gestion pour restaurant de pizzas

Projet fait par Rostom MOUADDEB

Démonstration des fonctionnalités
Affichage des pizzas disponibles sur la page d’accueil

Interface d’administration pour créer, modifier et supprimer des pizzas

API REST avec tests automatisés pour assurer la fiabilité

Technologies utilisées
Frontend
React avec Vite

Modules Sass pour le style

Navigation via react-router-dom

Backend
Node.js avec Express

Prisma comme ORM

Base de données SQLite

Tests avec Supertest et node:test

Intégration continue
GitHub Actions pour l’automatisation des tests

Vérification de la qualité du backend à chaque push ou pull request

Lancement via Docker
L'application est entièrement compatible avec Docker pour simplifier la mise en route.

Fichiers de configuration
backend/Dockerfile.backend

frontend/Dockerfile.frontend

docker-compose.yml

Commande de démarrage
bash
Copy
Edit
docker-compose up --build
Accès aux interfaces :

Frontend : http://localhost:5173

API backend : http://localhost:4000/api/pizzas



Fichiers .env à configurer
backend/.env
env
Copy
Edit
DATABASE_URL="file:./dev.db"
frontend/.env
env
Copy
Edit
VITE_API_URL=http://localhost:4000/api
Lancer les tests (backend)
bash
Copy
Edit
cd backend
pnpm run test
Les routes de l’API sont vérifiées automatiquement à l’aide de supertest et du module natif node:test.

Intégration continue
Le workflow GitHub Actions (.github/workflows/node-backend.yml) exécute les étapes suivantes :

Installation des dépendances backend

Synchronisation du schéma Prisma

Lancement automatique des tests unitaires

Interface utilisateur
Page d’accueil
Affichage de toutes les pizzas enregistrées

Navigation fluide avec une mise en page responsive

Espace d’administration
Formulaire de création et d’édition d’une pizza

Suppression d’éléments en un clic

Rafraîchissement dynamique de la liste

