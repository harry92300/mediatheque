# mediatheque
<div className="categories-container">
      <div className='image1'>
        <img src={Carrousel1} alt="images" style={{ maxWidth: '1500px', width: '100%', height: '100vh' }} />
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


  
      <div className='contien'>
        
                <div className="image-wrapper">
                  
                    <img src={Devello} alt="Livre 1" className="small-image1" />
                    <button onClick={handleAddBook} className="favorite styled" type="button">Fiction</button>
                    <p>Sarah Rivens(Auteur) </p>
                    <p className="price">Prix : 12 euros</p>
                </div>
                
                <div className="image-wrapper">
                    <img src={She} alt="Livre 2" className="small-image1" />
                    <button onClick={handleAddBook} className="favorite styled" type="button">Comics</button>
                    <p>Stan Lee et Juan Bobillo(Auteur) </p>
                    <p className="price">Prix : 12 euros</p>
                </div>
                
                <div className="image-wrapper">
                    <img src={Carrou} alt="Livre 3" className="small-image1" />
                    <button onClick={handleAddBook} className="favorite styled" type="button">Sciences</button>

                    <p>Robert Mercier (Auteur) </p>
                    <p className="price">Prix : 12 euros</p>
                </div>

            </div>


        <div className='contien'>
                <div className="image-wrapper">
                    <img src={Chat} alt="Livre 1" className="small-image1" />
                    <button onClick={handleAddBook} className="favorite styled" type="button">Poésie</button>
                    <p>Marie Boulic(Auteur) </p>
                    <p className="price">Prix : 12 euros</p>
                </div>
                
                <div className="image-wrapper">
                    <img src={Messi} alt="Livre 2" className="small-image1" />
                    <button onClick={handleAddBook} className="favorite styled" type="button">Sports</button> 
                    <p>Guillem Balagué(Auteur) </p>
                    <p className="price">Prix : 12 euros</p>
                </div>
                
                <div className="image-wrapper">
                    <img src={Reve} alt="Livre 3" className="small-image1" />
                    <button onClick={handleAddBook} className="favorite styled" type="button">Arts</button>
                    <p>Sibylline Meynet(Auteur) </p>
                    <p className="price">Prix : 12 euros</p>
                </div>
            </div>


            <div className='contien'>
                <div className="image-wrapper">
                    <img src={Baki} alt="Livre 1" className="small-image1" />
                    <button onClick={handleAddBook} className="favorite styled" type="button">Mangas</button>
                    <p>Keisuke Itagaki(Auteur) </p>
                    <p className="price">Prix : 12 euros</p>
                </div>
                
                <div className="image-wrapper">
                    <img src={Cedric} alt="Livre 2" className="small-image1" />
                    <button onClick={handleAddBook} className="favorite styled" type="button">Bds H</button>
                    <p>Laudec et Raoul Cauvin(Auteur) </p>
                    <p className="price">Prix : 12 euros</p>
                </div>
                
                <div className="image-wrapper">
                    <img src={Nancy} alt="Livre 3" className="small-image1" />
                    <button onClick={handleAddBook} className="favorite styled" type="button">Littérature</button>
                    <p>Nancy Tucker(Auteur) </p>
                    <p className="price">Prix : 12 euros</p>
                </div>
            </div>


            <div className='contien'>
                <div className="image-wrapper">
                    <img src={Charlie} alt="Livre 1" className="small-image1" />
                    <button onClick={handleAddBook} className="favorite styled" type="button">Loisirs</button>
                    <p>Martin Handford(Auteur) </p>
                    <p className="price">Prix : 10 euros</p>
                </div>
                
                <div className="image-wrapper">
                    <img src={Haiti} alt="Livre 2" className="small-image1" />
                    <button onClick={handleAddBook} className="favorite styled" type="button">Histoire</button>
                    <p>Anthony Sr Kavanagh(Auteur) </p>
                    <p className="price">Prix : 12 euros</p>
                </div>
                
                <div className="image-wrapper">
                    <img src={Espace} alt="Livre 3" className="small-image1" />
                    <button onClick={handleAddBook} className="favorite styled" type="button">Science-f</button>
                    <p>Colin Greenland(Auteur) </p>
                    <p className="price">Prix : 12 euros</p>
                </div>
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


































    import React, { useState } from 'react';
import '../style/Categori.css';
import Carrousel1 from '../image/carrousel1.jpg';
import Devello from '../image/Captive-tome-1.jpg';
import She from '../image/sheHULG.jpeg';
import Carrou from '../image/Devellopemntpersonnel.jpg';
import Chat from '../image/leChatDuBois.jpeg';
import Messi from '../image/Messi.jpeg';
import Reve from '../image/Reve.jpeg';
import Baki from '../image/Baki.jpeg';
import Cedric from '../image/Cedric.jpeg';
import Nancy from '../image/Nancy.jpeg';
import Charlie from '../image/Charlie.jpeg';
import Haiti from '../image/Haiti.jpeg';
import Espace from '../image/Espace.jpeg';
import axios from "axios"

const Categori = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // state => tableaux vide
  const [livre, setLivre] = useState([]);

const books = [
  { title: 'Fiction', author: 'Sarah Rivens', price: 12, image: Devello },
  { title: 'Comics', author: 'Stan Lee et Juan Bobillo', price: 12, image: She },
  { title: 'Sciences', author: 'Robert Mercier', price: 12, image: Carrou },
  { title: 'Poésie', author: 'Marie Boulic', price: 12, image: Chat },
  { title: 'Sports', author: 'Guillem Balagué', price: 12, image: Messi },
  { title: 'Arts', author: 'Sibylline Meynet', price: 12, image: Reve },
  { title: 'Mangas', author: 'Keisuke Itagaki', price: 12, image: Baki },
  { title: 'Bds H', author: 'Laudec et Raoul Cauvin', price: 12, image: Cedric },
  { title: 'Littérature', author: 'Nancy Tucker', price: 12, image: Nancy },
  { title: 'Loisirs', author: 'Martin Handford', price: 1, image: Charlie },
  { title: 'Histoire', author: 'Anthony Sr Kavanagh', price: 12, image: Haiti },
  { title: 'Science-F', author: 'Colin Greenland', price: 12, image: Espace },
 
];




axios.get('http://localhost:3000/livres')
.then(response => 
  // state => tbleaux du response.data
  setLivre(response.data))
.catch((error) => error.data)

// TABLEAUX 
console.log(livre)


const handleAddBook = () => {
  // Mettez ici la logique pour ajouter un livre
  alert("Ajouter un livre !");
};
  
  return (
    
    
    <div className="contienv2">
      
    {livre.map((item) => (
      <div key={item.idlivres}>
        <div className=".small-image"><img src={item.images} alt={item.titre} /></div>

        <p>nom: {item.titre}</p>
        <p>auteur: {item.auteur}</p>
        <p>annee: {item.annee}</p>
        
      </div>
      
    ))}
    </div>
  );
};

export default Categori;
