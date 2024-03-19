import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ModifierLivres = () => {
  const [titre, setTitre] = useState('');
  const [auteur, setAuteur] = useState('');
  const [annee, setAnnee] = useState('');
  const [images, setImages] = useState('');
  const navigate = useNavigate()
  // Utilisation de useParams pour récupérer l'ID depuis l'URL
  const { id } = useParams();

  useEffect(() => {
    // Utilisation de l'ID récupéré pour charger les détails du livre à modifier
    axios.get(`http://localhost:3000/livres/${id}`)
      .then(response => {
        const livre = response.data;
        setTitre(livre.titre);
        setAuteur(livre.auteur);
        setAnnee(livre.annee);
        setImages(livre.images);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des détails du livre :', error);
      });
  }, [id]);

  const handleUpdateBook = () => {
    axios.put(`http://localhost:3000/livres/${id}`, {
      titre: titre,
      auteur: auteur,
      annee: annee,
      images: images
    })
    .then(response => {
      console.log(response.data);
      navigate('/CatégoriedeLivre')
      // Mettez ici la logique pour gérer la réponse de la mise à jour du livre
    })
    .catch(error => {
      console.error('Erreur lors de la mise à jour du livre :', error);
      // Mettez ici la logique pour gérer les erreurs de la mise à jour du livre
    });
  };

  return (
    <div>
      <h2>Modifier Livre</h2>
      <input type="text" placeholder="Titre" value={titre} onChange={(e) => setTitre(e.target.value)} />
      <input type="text" placeholder="Auteur" value={auteur} onChange={(e) => setAuteur(e.target.value)} />
      <input type="text" placeholder="Année" value={annee} onChange={(e) => setAnnee(e.target.value)} />
      <input type="text" placeholder="Images" value={images} onChange={(e) => setImages(e.target.value)} />
      <button onClick={handleUpdateBook}>Mettre à jour</button>
    </div>
  );
};



export default ModifierLivres;
<div className="contact-info">
<h2>Contactez-nous</h2>
<p>Réseaux sociaux :</p>
<ul>
<li><a href="https://www.facebook.com/">Facebook</a></li>
<li><a href="https://twitter.com/">Twitter</a></li>
<li><a href="https://www.instagram.com/">Instagram</a></li>
</ul>
<p>Numéro de téléphone : 33+ 1 23 34 45 56</p>
</div>