# Projet API de Films

Ce projet utilise Express.js avec Axios pour les appels d'API, Body-parser pour l'analyse des corps de requête, et Mongoose pour l'interaction avec MongoDB. Il fournit des points de terminaison pour récupérer des films à partir d'une API externe et ajouter des films à une base de données MongoDB.

## Prérequis

Assurez-vous d'avoir les éléments suivants installés :

- Node.js
- MongoDB

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/Ayouboss02/Film_app_docker.git
   ```

2. Installez les dépendances :

   ```bash
   cd Film_app_docker
   npm install
   ```

3. Configurez les variables d'environnement :

   Créez un fichier `.env` dans le répertoire racine et ajoutez ceci :

   ```
   MONGODB_URI=mongodb://localhost:27017/films
   ```

   Remplacez `mongodb://localhost:27017/films` par votre URI de connexion MongoDB si nécessaire.

## Utilisation

1. Lancez le serveur :

   ```bash
   npm start
   ```

2. Accédez à l'API :

   - Pour récupérer des films : `GET /movies`
   - Pour ajouter un film : `POST /addmovie`

## Points de Terminaison de l'API

### Récupérer des Films

- **URL** : `/movies`
- **Méthode** : `GET`
- **Description** : Récupère des films à partir d'une API externe.
- **Réponse** : Retourne une liste de films au format HTML.

### Ajouter un Film

- **URL** : `/addmovie`
- **Méthode** : `POST`
- **Description** : Ajoute un film à la base de données MongoDB.
- **Corps de la Requête** :
  - `title` : Titre du film (String)
  - `episode_id` : ID de l'épisode du film (Nombre)
  - `producer` : Producteur du film (String)
- **Réponse** : Retourne un objet JSON contenant un message de succès et les détails du film ajouté.

  
### Affichage 
![image](https://github.com/Ayouboss02/Film_app_docker/assets/138698902/9474b80c-72e5-4947-8d6e-0f515436aabf)


## Dépendances

- [Express.js](https://expressjs.com/) : Cadre d'application web pour Node.js
- [Axios](https://axios-http.com/) : Client HTTP basé sur des promesses pour le navigateur et Node.js
- [Body-parser](https://www.npmjs.com/package/body-parser) : Middleware pour l'analyse des corps de requête entrants
- [Mongoose](https://mongoosejs.com/) : Modélisation d'objets MongoDB pour Node.js

## Contribuer

Les contributions sont les bienvenues ! Veuillez forker le dépôt et soumettre une pull request avec vos modifications.

## Auteur

BENCHOUAFI Ayoub(https://github.com/Ayouboss02)

