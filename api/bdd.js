import 'dotenv/config'
import mysql from "mysql2"
import cors from "cors"
import express from "express"
import bodyParser from "body-parser"
import { config } from 'dotenv'
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt"
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


const app = express();
app.use(express.json())
app.use(bodyParser.json());
app.use(cors())
app.get('/cors', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.send({ "msg": "This has CORS enabled 🎈" });
});



// Inscription
app.post('/utilisateurs', async (req, res) => {
  const { nom, prenom, email, motdepasse } = req.body;
  console.log(nom, prenom, email, motdepasse)
  try {
    // Générer le sel de hachage
    const saltRounds = 10; // Définir le nombre de tours de hachage
    const salt = await bcrypt.genSalt(saltRounds);

    // Crypter le mot de passe avec le sel généré
    const motdepasseCrypter = await bcrypt.hash(motdepasse, salt);

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
    // Attraper toute erreur survenue pendant le cryptage du mot de passe
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
  const userId = req.params.id;
  const { nom, prenom, email, motdepasse } = req.body;
  connection.query('UPDATE utilisateurs SET nom = ?, prenom = ?, email = ?, motdepasse = ? WHERE id = ?', [nom, prenom, email, motdepasse, userId], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: `Utilisateur avec l'ID ${userId} mis à jour avec succès` });
    }
  });
});

// Route pour supprimer un utilisateur
app.delete('/utilisateurs/:id', (req, res) => {
  const userId = req.params.id;
  connection.query('DELETE FROM utilisateurs WHERE id = ?', [userId], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: `Utilisateur avec l'ID ${userId} supprimé avec succès` });
    }
  });
});


app.get('/utilisateurs', (req, res) => {
  connection.query('SELECT * FROM utilisateurs', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});




app.post('/livres', (req, res) => {
  const { titre, auteur, annee,images } = req.body;
  connection.query('INSERT INTO livres (titre, auteur, annee, images) VALUES (?, ?, ?, ?)', [titre, auteur, annee, images], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ id: results.insertId, titre, auteur, annee, images });
    }
  });
});


// Route pour récupérer tous les livres 
app.get('/livres', (req, res) => {
  connection.query('SELECT * FROM livres', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});

// ... (routes pour mettre à jour et supprimer des livres)
app.delete('/livres/:id', (req, res) => {
  const livreId = req.params.id;
  connection.query('DELETE FROM livres WHERE idlivres = ?', [livreId], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: `Utilisateur avec l'ID ${livreId} supprimé avec succès` });
    }
  });
});

app.put('/livres/:id', (req, res) => {
  const livreId = req.params.id;
  const { titre, auteur, annee,images } = req.body;

  connection.query('UPDATE livres SET titre = ?, auteur = ?, annee = ?, images = ? WHERE idlivres = ?', [titre, auteur, annee,images, livreId], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: `Livre avec l'ID ${livreId} mis à jour avec succès` });
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur API écoutant sur le port ${PORT}`);
});