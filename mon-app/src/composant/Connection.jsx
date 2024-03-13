import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Connection.css';

export default function Connection() {
  return (
    <div>
      <div className="bloks2">
        <div id="container">
          <form>
            <h2 className='mop'>Connexion</h2>
            
            <label><b>Nom d'utilisateur</b></label>
            <input type="text" placeholder="Entrez votre email..." name="username" required />

            <label><b>Mot de passe</b></label>
            <input type="password" placeholder="Entrez votre mot de passe..." name="password" required />

            <Link to="/Pageadd">
              <button type="submit">Se connecter</button> 
            </Link>
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
                        <li><Link to="https://www.facebook.com/">Facebook</Link></li>
                        <li><Link to="https://twitter.com/">Twitter</Link></li>
                        <li><Link to="https://www.instagram.com/">Instagram</Link></li>
                    </ul>
                    <p>Numéro de téléphone : 33+ 1 23 34 45 56 </p>
                </div>
            </div>


      {/* ...rest of your code */}
    </div>
  );
}
