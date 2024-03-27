import 'dotenv/config'
import mysql from "mysql2"
import cors from "cors"
import express from "express"
import bodyParser from "body-parser"
import { config } from 'dotenv'
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt"
// Importation du module
config()
const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
});

connection.connect(function(err) {
  if (err) {
    console.error('Erreur lors de la connexion à la base de données :', err.stack);
    return;
  }
  console.log('Connecté à la base de données MySQL avec l\'ID', connection.threadId);
});

// Importation du module Express
const app = express();
// Création de l'application Express
app.use(express.json())
// Middleware pour parser les requêtes JSON
app.use(bodyParser.json());
// Middleware bodyParser pour parser les requêtes JSON (peut-être redondant avec express.json())
app.use(cors())
// Route GET pour /cors
app.get('/cors', (req, res) => {
// Configuration de l'en-tête Access-Control-Allow-Origin pour permettre les requêtes depuis http://localhost:3001
  res.set('Access-Control-Allow-Origin', 'http://localhost:3001');
  // Envoi d'une réponse JSON avec un message indiquant que CORS est activé
  res.send({ "msg": "This has CORS enabled 🎈" });
});



// Inscription
// Route POST pour créer '/utilisateurs'
app.post('/utilisateurs', async (req, res) => {
// Extraction des données du corps de la requête (nom, prénom, email, mot de passe)
  const { nom, prenom, email, motdepasse } = req.body;
  // Affichage des données reçues dans la console
  console.log(nom, prenom, email, motdepasse)
  try {
    // Générer le sel de hachage
    const saltRounds = 10; // Définir le nombre de tours de hachage
    const salt = await bcrypt.genSalt(saltRounds);

    // Crypter le mot de passe avec le sel généré
    const motdepasseCrypter = await bcrypt.hash(motdepasse, salt); //rajoute de la longeur dans le mot de passe

    // Insérer l'utilisateur dans la base de données avec le mot de passe crypté
    connection.query('INSERT INTO utilisateurs (nom, prenom, email, motdepasse) VALUES (?, ?, ?, ?)', [nom, prenom, email, motdepasseCrypter], (err, results) => {
      if (err) {
        // En cas d'erreur, renvoyer un message d'erreur
        res.status(500).json({ error: err.message });
      } else {
        // Si l'insertion est réussie, renvoyer les détails de l'utilisateur sans inclure le mot de passe
        res.json({ id: results.insertId, nom, prenom, email });
      }
    });
  } catch (error) {
    // Attraper toute erreur survenue pendant le cryptage du mot de passe 500 pour une erreur serveur
    res.status(500).json({ error: error.message });
  }
});

// Route pour l'authentification et la génération du token
app.post('/login', async (req, res) => {
  const { email, motdepasse } = req.body;
console.log(email, motdepasse)
  try {
    // Recherche de l'utilisateur dans la base de données
    connection.query('SELECT * FROM utilisateurs WHERE email = ?', [email], async (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      // Vérification si l'utilisateur existe
      if (results.length === 0) {
        return res.status(404).json({ error: 'Utilisateur non trouvé' });
      }

      const user = results[0]; // Première ligne de résultat
      // console.log(user)

      // Vérification du mot de passe
      const motdepasseCorrect = bcrypt.compare(motdepasse, user.motdepasse);
      if (!motdepasseCorrect) {
        return res.status(401).json({ error: 'Mot de passe incorrect' });
      }

      // Génération du token JWT meth pour cree un token 
      const token = jwt.sign({ user: { id: user.id, email: user.email } }, process.env.SECRET_TOKEN);

      // Envoi du token en réponse
      res.json({ token, user: { id: user.id, email: user.email, nom: user.nom, prenom: user.prenom } });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Route pour mettre à jour un utilisateur existant
app.put('/utilisateurs/:id', (req, res) => {
  // Récupération de l'identifiant de l'utilisateur à mettre à jour à partir des paramètres de l'URL
  const userId = req.params.id;
  // Extraction des nouvelles données de l'utilisateur du corps de la requête (nom, prénom, email, mot de passe)
  const { nom, prenom, email, motdepasse } = req.body;
  // Exécute une requête SQL pour mettre à jour les informations de l'utilisateur dans la table 'utilisateurs' avec l'ID correspondant
  connection.query('UPDATE utilisateurs SET nom = ?, prenom = ?, email = ?, motdepasse = ? WHERE id = ?', [nom, prenom, email, motdepasse, userId], (err, results) => {
    if (err) {
          // Si une erreur survient lors de l'exécution de la requête, renvoie une réponse avec un code d'erreur 500 et un message d'erreur
      res.status(500).json({ error: err.message });
    } else {
        // Si la mise à jour réussit, renvoie une réponse JSON avec un message indiquant le succès de la mise à jour
      res.json({ message: `Utilisateur avec l'ID ${userId} mis à jour avec succès` });
    }
  });
});

// Route pour supprimer un utilisateur
app.delete('/utilisateurs/:id', (req, res) => {
   // Récupération de l'identifiant de l'utilisateur à supprimer à partir des paramètres de l'URL
  const userId = req.params.id;
  // Exécute une requête SQL pour supprimer l'utilisateur de la table 'utilisateurs' avec l'ID correspondant
  connection.query('DELETE FROM utilisateurs WHERE id = ?', [userId], (err, results) => {
    if (err) {
      // Si une erreur survient lors de l'exécution de la requête, renvoie une réponse avec un code d'erreur 500 et un message d'erreur
      res.status(500).json({ error: err.message });
    } else {
      // Si la suppression réussit, renvoie une réponse JSON avec un message indiquant le succès de la suppression
      res.json({ message: `Utilisateur avec l'ID ${userId} supprimé avec succès` });
    }
  });
});

// Route GET pour lire '/utilisateurs'
app.get('/utilisateurs', (req, res) => {
// Exécute une requête SQL pour sélectionner tous les utilisateurs de la table 'utilisateurs'
  connection.query('SELECT * FROM utilisateurs', (err, results) => {
    if (err) {
      // Si une erreur survient lors de l'exécution de la requête, renvoie une réponse avec un code d'erreur 500 et un message d'erreur
      res.status(500).json({ error: err.message });
    } else {
       // Si la requête s'exécute avec succès, renvoie les résultats (les utilisateurs) au format JSON
      res.json(results);
    }
  });
});



// Route POST pour crée '/livres'
app.post('/livres', (req, res) => {
  // Extraction des données du corps de la requête (titre, auteur, année, images)
  const { titre, auteur, annee,images } = req.body;
  // Exécute une requête SQL pour insérer un nouveau livre dans la table 'livres'
  connection.query('INSERT INTO livres (titre, auteur, annee, images) VALUES (?, ?, ?, ?)', [titre, auteur, annee, images], (err, results) => {
    if (err) {
      // Si une erreur survient lors de l'exécution de la requête, renvoie une réponse avec un code d'erreur 500 et un message d'erreur
      res.status(500).json({ error: err.message });
    } else {
       // Si l'insertion réussit, renvoie une réponse JSON avec l'ID du livre inséré et les détails du livre ajouté
      res.json({ id: results.insertId, titre, auteur, annee, images });
    }
  });
});


// Route pour récupérer tous les livres 
app.get('/livres', (req, res) => {
  // Exécute une requête SQL pour sélectionner tous les livres de la table 'livres'
  connection.query('SELECT * FROM livres', (err, results) => {
    if (err) {
       // Si une erreur survient lors de l'exécution de la requête, renvoie une réponse avec un code d'erreur 500 et un message d'erreur
      res.status(500).json({ error: err.message });
    } else {
       // Si la requête s'exécute avec succès, renvoie les résultats (les livres) au format JSON
      res.json(results);
    }
  });
});

// ... (routes pour supprimer des livres)
app.delete('/livres/:id', (req, res) => {
  // Récupération de l'identifiant du livre à supprimer à partir des paramètres de l'URL
  const livreId = req.params.id;
  // Exécute une requête SQL pour supprimer le livre de la table 'livres' avec l'ID correspondant
  connection.query('DELETE FROM livres WHERE idlivres = ?', [livreId], (err, results) => {
    if (err) {
       // Si une erreur survient lors de l'exécution de la requête, renvoie une réponse avec un code d'erreur 500 et un message d'erreur
      res.status(500).json({ error: err.message });
    } else {
       // Si la suppression réussit, renvoie une réponse JSON avec un message indiquant le succès de la suppression
      res.json({ message: `Utilisateur avec l'ID ${livreId} supprimé avec succès` });
    }
  });
});
// Route PUT pour la mise a jour des livres '/livres/:id'
app.put('/livres/:id', (req, res) => {
  // Récupération de l'identifiant du livre à mettre à jour à partir des paramètres de l'URL
  const livreId = req.params.id;
  // Extraction des données mises à jour du corps de la requête (titre, auteur, année, images)
  const { titre, auteur, annee,images } = req.body;
// Exécute une requête SQL pour mettre à jour les détails du livre dans la table 'livres' avec l'ID correspondant
  connection.query('UPDATE livres SET titre = ?, auteur = ?, annee = ?, images = ? WHERE idlivres = ?', [titre, auteur, annee,images, livreId], (err, results) => {
    if (err) {
       // Si une erreur survient lors de l'exécution de la requête, renvoie une réponse avec un code d'erreur 500 et un message d'erreur
      res.status(500).json({ error: err.message });
    } else {
      // Si la mise à jour réussit, renvoie une réponse JSON avec un message indiquant le succès de la mise à jour
      res.json({ message: `Livre avec l'ID ${livreId} mis à jour avec succès` });
    }
  });
});
// numéro de port sur lequel le serveur va écouter
const PORT = 3000;
// Mise en écoute du serveur sur le port spécifié
app.listen(PORT, () => {
  // Une fois le serveur démarré, affiche un message dans la console indiquant sur quel port le serveur est en écoute
  console.log(`Serveur API écoutant sur le port ${PORT}`);
});