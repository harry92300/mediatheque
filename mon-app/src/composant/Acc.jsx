import React from 'react';
import '../style/Accueil.css';
import Logo from '../image/La de lecture bonne literature.mp4';
import Book from '../image/book-863418_1280.jpg';
import Book1 from '../image/book1.jpg';
import Book2 from '../image/book2.jpg';
import Book3 from '../image/book3.jpg';
import Petit from '../image/Petit-pays.jpg';




function Acc() {
    return (
        <div>
            <header className="header">
                <div className="logo">
                    <video width="100" height="100" controls>
                        <source src={Logo} type="video/mp4" />
                    </video>
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="#">Inscription</a></li>
                        <li><a href="#">Connexion</a></li>
                        <li><a href="#">Catégorie de Livre</a></li>
                    </ul>
                </nav>
            </header>

            <div className="image-container">
            <img src={Book} alt="images" style={{ maxWidth: '1500px', width: '100%', height: '100vh' }} />
            <h1 className="title">de la bonne literature</h1>
            </div>
            <h2 className="title2">de la bonne literature</h2>
            <div className="images-container2">
            <div className="image-wrapper">
                    <img src={Book1} alt="Livre 1" className="small-image" />
                    <p>Préparation avant la lecture : Avant de commencer à lire un texte, il est important de se préparer mentalement. Identifiez l'objectif de votre lecture. Posez-vous des questions sur ce que vous attendez de la lecture : Quel est le sujet du texte ? Quelles informations recherchez-vous ? Quel est le contexte de l'œuvre ? Cette préparation mentale vous aidera à rester concentré et à comprendre le texte de manière plus approfondie.</p>
                </div>
                <div className="image-wrapper">
                    <img src={Book2} alt="Livre 2" className="small-image" />
                    <p>Lecture active : Pendant la lecture, soyez actif mentalement. Posez des questions sur le contenu, réfléchissez aux concepts présentés et faites des liens avec vos connaissances antérieures. Prenez des notes ou soulignez les points clés pour mieux vous souvenir des informations importantes. Si vous ne comprenez pas un passage, prenez le temps de relire et de réfléchir à sa signification. Ne continuez pas à lire en espérant que cela deviendra plus clair plus tard.</p>
                </div>
                <div className="image-wrapper">
                    <img src={Book3} alt="Livre 3" className="small-image" />
                    <p>Réflexion après la lecture : Après avoir terminé la lecture, prenez le temps de réfléchir à ce que vous avez appris. Résumez mentalement ou par écrit les principaux points du texte. Posez-vous des questions sur la signification globale du texte, son message central et son impact sur votre compréhension du sujet. Si c'est un texte informatif, demandez-vous si vous pouvez résumer les informations clés de manière concise. Si c'est un texte littéraire, réfléchissez aux thèmes, aux personnages et à la structure de l'histoire.</p>
                </div>
   
</div>
<h3 className="title3">de la bonne literature</h3>
<div className='contien'>
 <img src={Petit} alt="Livre 3" className="small-image" />
 <img src={Petit} alt="Livre 3" className="small-image" />
 <img src={Petit} alt="Livre 3" className="small-image" />
</div>


            

            {/* Le reste de votre contenu */}
        </div>
    );
}

export default Acc;