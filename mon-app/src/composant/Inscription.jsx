import React from 'react';
import '../style/Inscription.css';
import { Link } from 'react-router-dom';
import Inscri from '../image/Inscri.jpg'

export default function Inscription() {
    return (
        <div>
            <ul className="nav-links2">
                <li><h1>Connectify</h1></li>
                <li><Link to='/' className="link yellow-link" >Accueil</Link></li>
                <li><Link to='/connexion' className="link" >Connexion</Link></li>
                <li><Link to='/inscription' className="link" >Inscription</Link></li>
            </ul>
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
            <footer>
                
            </footer>
        </div>
    );
}