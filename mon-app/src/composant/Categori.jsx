import React from 'react';
import '../style/Categori.css';
import Carrousel1 from '../image/carrousel1.jpg';
import Devello from '../image/Captive-tome-1.jpg';
import She from '../image/sheHULG.jpeg';
import Carrou from '../image/Devellopemntpersonnel.jpg'
import Chat from '../image/leChatDuBois.jpeg'
import Messi from '../image/Messi.jpeg'
import Reve from '../image/Reve.jpeg'

const Categori = () => {
  return (
    <div className="categories-container">
      <div className='image1'>
        <img src={Carrousel1} alt="images" style={{ maxWidth: '1500px', width: '100%', height: '100vh' }} />
      </div>

      <div className='exposition'>
        <h2 className='mesCategori'>Nos Livres</h2>
      </div>
  
      <div className='contien'>
                <div className="image-wrapper">
                    <img src={Devello} alt="Livre 1" className="small-image" />
                    <button class="favorite styled" type="button">Fiction pour jeunes adultes</button>
                    <p>Sarah Rivens(Auteur) </p>
                </div>
                
                <div className="image-wrapper">
                    <img src={She} alt="Livre 2" className="small-image" />
                    <button class="favorite styled" type="button"> Comics, Super-héros</button>
                    <p>Stan Lee et Juan Bobillo(Auteur) </p>
                </div>
                
                <div className="image-wrapper">
                    <img src={Carrou} alt="Livre 3" className="small-image" />
                    <button class="favorite styled" type="button">Sciences humaines</button>
                    <p>Robert Mercier (Auteur) </p>
                </div>

            </div>


        <div className='contien'>
                <div className="image-wrapper">
                    <img src={Chat} alt="Livre 1" className="small-image" />
                    <button class="favorite styled" type="button"> Poésie</button>
                    <p>Marie Boulic(Auteur) </p>
                </div>
                
                <div className="image-wrapper">
                    <img src={Messi} alt="Livre 2" className="small-image" />
                    <button class="favorite styled" type="button"> Sports</button>
                    <p>Guillem Balagué(Auteur) </p>
                </div>
                
                <div className="image-wrapper">
                    <img src={Reve} alt="Livre 3" className="small-image" />
                    <button class="favorite styled" type="button"> Arts décoratifs</button>
                    <p>Sibylline Meynet(Auteur) </p>
                </div>
            </div>


            <div className='contien'>
                <div className="image-wrapper">
                    <img src={Devello} alt="Livre 1" className="small-image" />
                    <button class="favorite styled" type="button">Add to favorites</button>
                    <p>Gaël Faye (Auteur) </p>
                </div>
                
                <div className="image-wrapper">
                    <img src={She} alt="Livre 2" className="small-image" />
                    <button class="favorite styled" type="button">Add to favorites</button>
                    <p>Rupi Kaur (Auteur) </p>
                </div>
                
                <div className="image-wrapper">
                    <img src={Carrou} alt="Livre 3" className="small-image" />
                    <button class="favorite styled" type="button">Add to favorites</button>
                    <p>Robert Laffont (Auteur) </p>
                </div>
            </div>


            <div className='contien'>
                <div className="image-wrapper">
                    <img src={Devello} alt="Livre 1" className="small-image" />
                    <button class="favorite styled" type="button">Add to favorites</button>
                    <p>Gaël Faye (Auteur) </p>
                </div>
                
                <div className="image-wrapper">
                    <img src={She} alt="Livre 2" className="small-image" />
                    <button class="favorite styled" type="button">Add to favorites</button>
                    <p>Rupi Kaur (Auteur) </p>
                </div>
                
                <div className="image-wrapper">
                    <img src={Carrou} alt="Livre 3" className="small-image" />
                    <button class="favorite styled" type="button">Add to favorites</button>
                    <p>Robert Laffont (Auteur) </p>
                </div>
            </div>




          






    </div>

    
  );
};

export default Categori;
