import React from 'react';
import '../style/Inscription.css';
import { Link } from 'react-router-dom';
import Inscri from '../image/Inscri.jpg';

export default function Inscription() {
    return (
        <div>
            <div className="bloks3">
                <img
                    src={Inscri}
                    alt="images"
                    className="responsive-image"
                    width="750px"
                    height="920px"
                    style={{ maxWidth: '750px' }}
                />
                <div id="container">
                    <div className="container">
                        <h1>S'inscrire</h1>
                        <p>Veuillez remplir ce formulaire pour créer un compte.</p>
                        <hr />

                        <label htmlFor="email"><b>Email</b></label>
                        <input type="text" placeholder="Entrez l'e-mail" name="email" required />

                        <label htmlFor="psw"><b>Mot de passe</b></label>
                        <input type="password" placeholder="Entre votre Mot de passe" name="psw" required />

                        <label htmlFor="psw-repeat"><b>Répéter le mot de passe</b></label>
                        <input type="password" placeholder="remettre votre Mot de passe" name="psw-repeat" required />

                        <label>
                            <input type="checkbox" checked="checked" name="remember" style={{ marginBottom: '15px' }} /> Souviens-toi de moi
                        </label>

                        <p>En créant un compte, vous acceptez nos<a href="#" style={{ color: 'dodgerblue' }}>conditions et confidentialité</a>.</p>

                        <div className="clearfix">
                            <button type="button" className="cancelbtn">Annuler</button>
                            <button type="submit" className="signupbtn">S'inscrire</button>
                        </div>
                    </div>
                    <p className="inscription-link">Déjà inscrit ? <Link to="/connexion">Connectez-vous</Link></p>
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
