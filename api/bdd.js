import 'dotenv/config'
import mysql from "mysql2"
import cors from "cors"
import express from "express"
import bodyParser from "body-parser"
import { config } from 'dotenv'

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
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.send({ "msg": "This has CORS enabled 🎈" });
});


app.post('/utilisateurs', (req, res) => {
  const { nom, prenom, email, motdepasse } = req.body;
  connection.query('INSERT INTO utilisateurs (nom, prenom, email, motdepasse) VALUES (?, ?, ?, ?)', [nom, prenom, email, motdepasse], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ id: results.insertId, nom, prenom, email, motdepasse });
    }
  });
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
  const { titre, auteur, annee, empruntee, rendu } = req.body;
  connection.query('INSERT INTO livres (titre, auteur, annee, empruntee, rendu) VALUES (?, ?, ?)', [titre, auteur, annee], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ id: results.insertId, titre, auteur, annee, empruntee, rendu });
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
  const { supprimer, titre, auteur, annee, empruntee, rendu } = req.body;

  if (supprimer === true) {
    connection.query('DELETE FROM livres WHERE id = ?', [livreId], (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ message: `Livre avec l'ID ${livreId} supprimé avec succès` });
      }
    });
  } else {
    connection.query('UPDATE livres SET titre = ?, auteur = ?, annee = ?, empruntee = ?, rendu = ? WHERE id = ?', [titre, auteur, annee, empruntee, rendu, livreId], (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ message: `Livre avec l'ID ${livreId} mis à jour avec succès` });
      }
    });
  }
});

app.put('/livres/:id', (req, res) => {
  const livreId = req.params.id;
  const { titre, auteur, annee, empruntee, rendu } = req.body;

  connection.query('UPDATE livres SET titre = ?, auteur = ?, annee = ?, empruntee = ?, rendu = ? WHERE id = ?', [titre, auteur, annee, empruntee, rendu, livreId], (err, results) => {
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
