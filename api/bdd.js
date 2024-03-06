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
  connection.query('INSERT INTO utilisateurs (nom, prenom, email, mot_de_passe) VALUES (?, ?, ?, ?)', [nom, prenom, email, motdepasse], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ id: results.insertId, nom, prenom, email, motdepasse });
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

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur API écoutant sur le port ${PORT}`);
});
