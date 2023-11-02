import React from 'react';
import '../style/Inscription.css';
import { Link } from 'react-router-dom';
import Inscri from '../image/Inscri.jpg'

export default function Inscription() {
    return (
        <div>
           
            <div className="bloks3">
                <img src={Inscri} alt="images" className="responsive-image" width="750px" height="920px" style={{ maxWidth: '750px' }} />
                <div id="container">
                    <form action="verification.php" method="POST">
                        <h2 className='mop1'>Inscription</h2>
                        <div className="name-container">
                            <div className="name-field">
                                <label><b>Nom :</b></label>
                                <input type="text" placeholder="Entrez votre nom..." name="nom" required />
                            </div>
                            <div className="name-field">
                                <label><b>Prénom :</b></label>
                                <input type="text" placeholder="Entrez votre prénom..." name="prenom" required />
                            </div>
                        </div>
                        <label><b>Email</b></label>
                        <input type="email" placeholder="Entrez votre email..." name="email" required />

                        <label><b>Mot de passe :</b></label>
                        <input type="password" placeholder="Entrez votre mot de passe..." name="password" required />

                        <label><b>Vérification de mot de passe :</b></label>
                        <input type="password" placeholder="Entrez à nouveau le mot de passe..." name="password2" required />
                        <label><b>Genre</b></label>
                        <select name="genre">
                            <option value="homme">Homme</option>
                            <option value="femme">Femme</option>
                        </select>

                        <Link to="/Contact"><button className='m3a' id="valider">Valider</button></Link>
                    </form>
                    <p className="inscription-link">Déjà inscrit ? <Link to="/connexion">Connectez-vous</Link></p>
                </div>
            </div>
            <div className="footer">
    <div className="map-container">
        {/* Intégrez ici votre carte Google Maps */}
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
        <p>Numéro de téléphone : 123-456-7890</p>
    </div>
</div>

        </div>
    );
}