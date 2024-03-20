import React, { useState } from 'react';
import axios from 'axios';
import '../style/Connection.css';
import { useNavigate } from 'react-router-dom';

export default function Connection() {
  const [formData, setFormData] = useState({
    email: '',
    motdepasse: ''
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      axios.post('http://localhost:3000/login', formData)
      .then(response => {
        console.log(response.data)
        alert('Connexion réussie !');
      navigate('/pageadd');
      })

      
    } catch (error) {
      console.error('Erreur lors de la connexion :', error.message);
      alert('Une erreur s\'est produite lors de la connexion. Veuillez réessayer plus tard.');
    }
  };

  return (
    <div>
      <div className="bloks2">
        <div id="container">
          <form onSubmit={handleSubmit}>
            <h2 className='mop'>Connexion</h2>
            
            <label><b>Nom d'utilisateur</b></label>
            <input type="text" placeholder="Entrez votre nom d'utilisateur..." name="email" value={formData.email} onChange={handleChange} required />

            <label><b>Mot de passe</b></label>
            <input type="password" placeholder="Entrez votre mot de passe..." name="motdepasse" value={formData.motdepasse} onChange={handleChange} required />

            <button type="submit">Se connecter</button>
          </form>
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
