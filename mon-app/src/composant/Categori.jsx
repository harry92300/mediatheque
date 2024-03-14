import React, { useState, useEffect } from 'react';
import '../style/Categori.css';
import axios from 'axios';
import Carrousel1 from '../image/carrousel1.jpg';

const Categori = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [livre, setLivre] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/livres')
      .then(response => setLivre(response.data))
      .catch(error => console.error('Erreur lors de la récupération des livres :', error));
  }, []);
  const handleAddBook = () => {
    // Mettez ici la logique pour ajouter un livre
    alert("Ajouter un livre !");
  };
  return (
    <div className="categories-container">
      <div className='image1'>
        {/* Placeholder image */}
        <img src={Carrousel1} alt="images" style={{ maxWidth: '1500px', width: '100%', height: '100vh' }} 
        />
      </div>

      <div className='exposition'>
        <h2 className='mesCategori'>Nos Livres</h2>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Rechercher un livre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="contienv2">
        {livre.map((item) => (
          <div key={item.idlivres}>
            <div className="small-imageZZ">
              <img src={item.images} alt={item.titre} className="small-image" />
            </div>
            <p>nom: {item.titre}</p>
            <p>auteur: {item.auteur}</p>
            <p>annee: {item.annee}</p>
            <button onClick={handleAddBook} className="favorite styled" type="button">cliquez ici</button>
          </div>
        ))}
   
    </div>
    <div className="footer">
    <div className="map-container">
        {/* Intégrez ici votre carte Google Maps */}
        <iframe
            title="Google Maps"
            src="https://maps.app.goo.gl/twhJ37eWVy8E1fsj6"
            width="400"
            height="300"
            allowFullScreen=""
            loading="lazy"
            
        ></iframe>
    </div>
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
      </div>
    </div>
  );
};



export default Categori;
