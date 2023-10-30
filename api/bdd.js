const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'votre_nom_utilisateur',
  password: 'votre_mot_de_passe',
  database: 'nom_de_votre_base_de_donnees'
});

module.exports = connection;
const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./db'); // Assurez-vous que le chemin du fichier de connexion est correct

const app = express();
app.use(bodyParser.json());

// Route pour créer un nouveau livre
app.post('/livres', (req, res) => {
  const { titre, auteur, annee } = req.body;
  connection.query('INSERT INTO livres (titre, auteur, annee) VALUES (?, ?, ?)', [titre, auteur, annee], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ id: results.insertId, titre, auteur, annee });
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
