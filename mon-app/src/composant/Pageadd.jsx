import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Pageadd.css';
import Devello from '../image/Captive-tome-1.jpg';


export default function Pageadd() {
    const handleDeleteBook = () => {
        // Mettez ici la logique pour supprimer le livre
        alert("Livre supprimé !");
      };
  return (
    <div>
      <div className="book-profile">
      <img src={Devello} alt="Livre 1" className="small-image1" />
 
        <img src="url_de_votre_image" alt="Titre du livre" className="book-cover" />
        <div className="book-details">
          <h1>Titre du livre</h1>
          <p>Auteur: Nom de l'auteur</p>
          <p>Date de publication: Date de publication du livre</p>
          <p>Genre: Genre du livre</p>
          <p>ISBN: Numéro ISBN</p>
          <p>Langue: Langue du livre</p>
          <p>Prix: Prix du livre</p>
          <p>Nombre de pages: Nombre de pages du livre</p>
          <p>Description: Description du livre</p>
          <button onClick={handleDeleteBook}>Supprimer le livre</button>
        </div>
      </div>

      <div className="footer">
        <div className="map-container">
          <iframe
            title="Google Maps"
            src="https://maps.app.goo.gl/eYsTWth6AFNtWYfj6"
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
          <p>Numéro de téléphone : 33+ 1 23 34 45 56 </p>
        </div>
      </div>
    </div>
  );
}
