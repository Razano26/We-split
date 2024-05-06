# We Split

## À propos
We Split est une application web moderne conçue pour faciliter le partage des dépenses au sein de groupes. Développée dans le cadre du programme 'DO' de l'école d'ingénieur Polytech Montpellier, cette application se veut être une alternative enrichie à l'application Tricount. We Split est bâtie en utilisant React.js pour l'interface utilisateur, avec une API backend en Express et une base de données PostgreSQL.

Vous pouvez accéder à la version en ligne de l'application à l'adresse suivante : [wesplit.fr](https://wesplit.fr)
Sont également disponibles les documentations intereractive de l'API à l'adresse suivante : [doc.wesplit.fr](https://doc.wesplit.fr)

## Fonctionnalités
- **Partage des dépenses** : Permet aux utilisateurs de saisir facilement leurs dépenses et de les partager avec d'autres.
- **Interface utilisateur intuitive** : Un design UX/UI attrayant et convivial, assurant une expérience utilisateur agréable.
- **Calcul automatique** : Calcul des montants dus et à recevoir pour chaque participant.
- **Rapports détaillés** : Visualisation des dépenses à travers des graphiques et tableaux détaillés.
- **Sécurité des données** : Protection des informations personnelles et financières des utilisateurs.

## Technologies utilisées
- **Frontend** : [React.js](https://fr.react.dev/)
- **Styling** : [Tailwind CSS](https://tailwindcss.com/)
- **Backend** : [Express.js](https://expressjs.com/)
- **ORM** : [Prisma](https://www.prisma.io/)
- **Sécurité** : [JSON Web Tokens (JWT)](https://jwt.io/)
- **Base de données** : [PostgreSQL](https://www.postgresql.org/)

## Installation et déploiement
### Environnement de développement
#### Prérequis
- Node.js
- npm
- docker-compose

#### Instructions
1. Cloner le dépôt
2. Démarrez le serveur PostgreSQL en utilisant docker-compose
3. Installez les dépendances du frontend et du backend
4. Ajoutez un fichier `.env` à la racine du dossier backend avec les variables d'environnement définies dans le fichier `.env.template` adaptées à votre configuration (la configuration par défaut fonctionne pour une base de données PostgreSQL locale provisionnée avec docker-compose)
5. Ajoutez un fichier `.env` à la racine du dossier frontend avec les variables d'environnement définies dans le fichier `.env.template` adaptées à votre configuration (la configuration par défaut fonctionne pour une API backend Express locale)
6. Démarrez le serveur backend
7. Démarrez le serveur frontend

```bash
git clone git@github.com:Razano26/We-split.git
cd We-split
docker-compose up -d postgres
cd backend/api
npm install
cp .env.template .env
npm run dev
cd ../../frontend
npm install
cp .env.template .env
npm start
```

## Contribution
Les contributions sont les bienvenues. Pour contribuer, veuillez suivre les instructions suivantes :
1. Forker le projet
2. Créer votre branche de fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## Licence
Distribué sous la licence MIT. Voir `LICENSE` pour plus d'informations.

## Contact
- Louis Labeyrie - louis@wesplit.fr
- Lien du projet - https://github.com/Razano26/We-split
