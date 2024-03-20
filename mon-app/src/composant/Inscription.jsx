import React, { useState } from 'react';
import '../style/Inscription.css';
import { Link, useNavigate } from 'react-router-dom';
import Inscri from '../image/Inscri.jpg';
import axios from 'axios';

export default function Inscription() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        motdepasse: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
console.log(formData)
const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:3000/utilisateurs', formData);

        if (!response) {
            throw new Error('Erreur lors de la création de l\'utilisateur');
        }
        navigate('/Connexion')
        alert('Utilisateur créé avec succès !');
        // Vous pouvez rediriger l'utilisateur vers une autre page après la création réussie de l'utilisateur
    } catch (error) {
        console.error('Erreur lors de la création de l\'utilisateur :', error.message);
        alert('Une erreur s\'est produite lors de la création de l\'utilisateur. Veuillez réessayer plus tard.');
    }
};


    return (
        <div>
            <div className="bloks3">
                <img
                    src={Inscri}
                    alt="images"
                    className="responsive-image"
                    width="750px"
                    height="920px"
                   

                    style={{ maxWidth: '750px' , width: '100%', height: '100vh'}}
                />
                <div id="container">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="container">
                            <h1>S'inscrire</h1>
                            <p>Veuillez remplir ce formulaire pour créer un compte.</p>
                            <hr />
                            <label htmlFor="nom"><b>Nom</b></label>
                            <input type="text" onChange={handleChange} placeholder="Entrez le Nom" name="nom" required />

                            <label htmlFor="prénom"><b>Prénom</b></label>
                            <input type="text" onChange={handleChange} placeholder="Entre le prénom" name="prenom" required />

                            <label htmlFor="email"><b>Email</b></label>
                            <input type="text" onChange={handleChange} placeholder="Entrez l'e-mail" name="email" required />

                            <label htmlFor="psw"><b>Mot de passe</b></label>
                            <input type="password" onChange={handleChange} placeholder="Entre votre Mot de passe" name="motdepasse" required />

                            <label>
                                <input type="checkbox" onChange={handleChange} checked="checked" name="remember" style={{ marginBottom: '15px' }} /> Souviens-toi de moi
                            </label>

                            <div className="clearfix">
                                <button type="button" className="cancelbtn">Annuler</button>
                                <button type="submit" className="signupbtn">S'inscrire</button>
                            </div>
                        </div>
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
        <p>Numéro de téléphone : 33+ 1 23 34 45 56</p>
    </div>
</div>

        </div>
    );
}
