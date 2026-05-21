<<<<<<< HEAD
﻿# Recouvra+ – API de gestion du recouvrement
=======
# Recouvra+ – API de gestion du recouvrement
>>>>>>> 37b30363f1960394a1e4e2e302d0997cff1b676d

## 📋 Description

Recouvra+ est une API REST développée avec Express.js permettant de gérer les clients, les factures impayées et les actions de recouvrement d'une entreprise. Le projet est uniquement backend, sans paiement en ligne ni fonctionnalités temps réel.

## ✨ Fonctionnalités

L'API REST propose les fonctionnalités suivantes :

- **Gestion des utilisateurs** avec rôles (agent, manager, admin)
- **Gestion des clients** et informations associées
- **Gestion des factures** et leurs statuts
- **Enregistrement des paiements manuels**
- **Suivi des actions de recouvrement**
- **Statistiques simples** sur le recouvrement

## 🛠️ Technologies

- **Runtime** : Node.js 22
- **Framework** : Express.js
- **Base de données** : MongoDB (Mongoose)
- **Authentification** : JWT (JSON Web Tokens)
- **Validation** : Joi
- **Documentation** : Swagger
- **Tests** : Jest

## 📦 Installation

### Prérequis

- Node.js 22 ou supérieur
- MongoDB (local ou cloud)
  - Mongo compass (required)
  - mongo community server (optional)

### Étapes d'installation

1. **Cloner le projet**
  ```bash
   git clone <repository-url>
   cd Recouvra
  ```
2. **Creer un fichier** `.env` **à la racine de projet :**
  ```
  MONGO_URI=mongodb+srv://Username:PASSWORD@cluster0.h3tiuab.mongodb.net/recouvra
  JWT_SECRET=GenerateYourJwtKey    
  ```
3. **Ou installer les dépendances supplémentaires manuellement** 
  ```bash
   npm i

  # Ou mannuellement 

   npm install express
   npm install mongoose
   npm install jsonwebtoken
   npm install joi
   npm install swagger-ui-express swagger-jsdoc
   npm install jest --save-dev
  ```
   
4. **Démarrer l'application**
  ```bash
   npm start
  ```
   

## 📁 Structure du projet

```
Recouvra/
├── app.js                 # Point d'entrée de l'application
├── package.json          # Dépendances et scripts npm
├── readme.md            # Documentation
├── src/
│   ├── routes/          # Routes API
│   ├── controllers/      # Logique métier
│   ├── models/          # Modèles MongoDB
│   ├── middleware/      # Middleware (authentification, validation)
│   ├── validators/      # Schémas de validation Joi
│   └── config/          # Configuration de l'application
├── tests/               # Tests unitaires
└── documentation/       # Documentation Swagger
```

## ⚙️ Contraintes techniques

- Express.js pour l'API REST
- Authentification JWT pour la sécurité
- MongoDB avec Mongoose pour la persistance des données
- Validation stricte des données
- Documentation API avec Swagger
- Tests unitaires de base avec Jest

## 📊 Critères d'évaluation

- ✅ Respect du sujet et des fonctionnalités demandées
- ✅ Qualité du code et de l'architecture
- ✅ Validation des données et cohérence des réponses API
- ✅ Utilisation correcte de Git et organisation du travail
- ✅ Documentation de l'API
- ✅ Présence de tests unitaires de base
- ✅ Clarté globale du projet

## 🚀 Démarrage rapide

```bash
# Installation
npm install

# Configuration (créer .env)
# Éditer le fichier .env avec vos paramètres

# Démarrage
npm start

# Tests
npm test

# Accès à la documentation API
# http://localhost:3000/api-docs
```

## 📝 API Endpoints

### Authentification

- `POST /api/auth/register` - Créer un nouvel utilisateur
- `POST /api/auth/login` - Connexion utilisateur

### Utilisateurs

- `GET /api/users` - Lister les utilisateurs
- `GET /api/users/:id` - Détails d'un utilisateur
- `PUT /api/users/:id` - Modifier un utilisateur
- `DELETE /api/users/:id` - Supprimer un utilisateur

### Clients

- `GET /api/clients` - Lister les clients
- `POST /api/clients` - Créer un client
- `GET /api/clients/:id` - Détails d'un client
- `PUT /api/clients/:id` - Modifier un client
- `DELETE /api/clients/:id` - Supprimer un client

### Factures

- `GET /api/invoices` - Lister les factures
- `POST /api/invoices` - Créer une facture
- `GET /api/invoices/:id` - Détails d'une facture
- `PUT /api/invoices/:id` - Modifier une facture

### Paiements

- `POST /api/payments` - Enregistrer un paiement

### Actions de recouvrement

- `GET /api/recovery-actions` - Lister les actions
- `POST /api/recovery-actions` - Créer une action
- `PUT /api/recovery-actions/:id` - Modifier une action

### Statistiques

- `GET /api/statistics` - Obtenir les statistiques

<<<<<<< HEAD
## Roles et permissions

### Agent

- **Users** : read all, read one, update any user, delete any user except own account.
- **Clients** : read all clients and read one client only. No create/update/delete.
- **Invoices** : read invoices, but controller filters list to clients created by that agent; single invoice is blocked if not linked to their client. No create/update/status/delete.
- **Payments** : create payment, read one payment. Cannot list all payments, update, or delete.
- **Recovery actions** : read all/read one only. No create/update/delete.
- **Statistics** : read main stats only. No monthly stats.

### Manager

- **Users** : read all, read one, update any user, delete any user except own account.
- **Clients** : full CRUD.
- **Invoices** : full CRUD plus status update.
- **Payments** : list all, read one, create, update. Cannot delete payments.
- **Recovery actions** : full CRUD.
- **Statistics** : main stats and monthly stats.

### Admin

- **Users** : read all, read one, update any user, delete any user except own account.
- **Clients** : full CRUD.
- **Invoices** : full CRUD plus status update.
- **Payments** : full CRUD, including delete.
- **Recovery actions** : full CRUD.
- **Statistics** : main stats and monthly stats.

---

## 🧪 API Testing with Swagger

The RecouvraApi backend is fully documented with **Swagger/OpenAPI 3.0**, providing an interactive interface for testing all API endpoints.

### Accessing Swagger UI

Once the backend is running, open your browser and navigate to:

```
http://localhost:3001/api-docs
```

You should see the Swagger dashboard with all available endpoints organized by module.

![Swagger](docs/swagger.png)

### Testing Protected Endpoints with JWT

Most endpoints require authentication via JWT token. Follow these steps:


#### Step 1: Get JWT Token from Login

1. **Locate the Auth section** in Swagger
2. **Click on** `POST /api/auth/login` endpoint
3. **Click** "Try it out" button
4. **Enter credentials** in the Request body:
   ```json
   {
     "email": "test@example.com",
     "password": "TestPassword123"
   }
   ```
5. **Click** "Execute" button

   ![Swagger Login Request](docs/swagger-login-request.png)

6. **Copy the JWT token** from the Response body (the `token` field value)

#### Step 2: Authorize with JWT Token

1. **Click** the green "Authorize" button at the top of the Swagger page

   ![Swagger Authorize Button](docs/swagger-authorize-button.png)

2. **In the "Available authorizations" modal**, select **"bearerAuth (http, Bearer)"**

3. **Paste the JWT token** in the Value field (without "Bearer" prefix)

   ![Swagger Authorization Modal](docs/swagger-authorize-modal.png)

4. **Click** "Authorize" button to confirm

5. **Click** "Close" to dismiss the modal

#### Step 3: Test Protected Endpoints

Once authorized, all protected endpoints will automatically include the JWT token in the request header:

1. **Navigate** to any protected endpoint (e.g., `GET /api/clients`)
2. **Click** "Try it out"
3. **Click** "Execute"
4. The request will now succeed with proper authorization

### Token Expiration

- Tokens are typically valid for a limited time (usually 24 hours)
- If you get a `401 Unauthorized` response, your token has expired
- **Solution**: Repeat Step 1 to get a new token, then re-authorize in Step 2

### Testing Different User Roles

To test endpoints with different role permissions:

1. **Register/Login** with accounts having different roles (Agent, Manager, Admin)
2. **Get the JWT token** for each account
3. **Switch authorization tokens** by clicking "Authorize" and entering a different token
4. **Test the same endpoint** to see if access is granted or denied based on role

### Example Workflow

```
1. Login with Agent account → Get Agent token
2. Authorize with Agent token
3. Try GET /api/payments → ❌ Access Denied (Agents can't list payments)
4. Click Authorize → Enter Manager token
5. Try GET /api/payments → ✅ Success (Managers can list payments)
```

### Common Issues

| Issue | Solution |
|-------|----------|
| **401 Unauthorized** | Token is missing or expired. Get a new token from login endpoint. |
| **403 Forbidden** | Your user role doesn't have permission. Try with a different role's token. |
| **CORS Error** | Backend CORS not enabled. Add `app.use(cors())` in `app.js`. |
| **Cannot connect to server** | Backend not running. Start it with `npm start` on port 3001. |

---
=======
## 👨‍💼 Rôles et permissions

- **Admin** : Accès complet à toutes les fonctionnalités
- **Manager** : Gestion des clients, factures et actions
- **Agent** : Consultation et mise à jour des actions de recouvrement
>>>>>>> 37b30363f1960394a1e4e2e302d0997cff1b676d

## 📧 Contact et support

Pour toute question ou problème, veuillez ouvrir une issue sur le dépôt GitHub.

---

<<<<<<< HEAD
**Dernière mise à jour** : Mars 2026
=======
**Dernière mise à jour** : Mars 2026
>>>>>>> 37b30363f1960394a1e4e2e302d0997cff1b676d
