import React from 'react';
import '../style/Categori.css';
import Carrousel1 from '../image/carrousel1.jpg';
import Devello from '../image/Captive-tome-1.jpg';
import She from '../image/sheHULG.jpeg';
import Carrou from '../image/Devellopemntpersonnel.jpg'

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
                    <button className="button">Roman</button>
                    <p>Gaël Faye (Auteur) </p>
                </div>
                
                <div className="image-wrapper">
                    <img src={She} alt="Livre 2" className="small-image" />
                    <button className="button">Poésie</button>
                    <p>Rupi Kaur (Auteur) </p>
                </div>
                
                <div className="image-wrapper">
                    <img src={Carrou} alt="Livre 3" className="small-image" />
                    <button className="button">Guide</button>
                    <p>Robert Laffont (Auteur) </p>
                </div>
                
            </div>

        <button class="favorite styled" type="button">Add to favorites</button>
        <button class="favorite styled" type="button">Add to favorites</button>
        <button class="favorite styled" type="button">Add to favorites</button>

        <div className='contien'>
                <div className="image-wrapper">
                    <img src={Devello} alt="Livre 1" className="small-image" />
                    <button className="button">Roman</button>
                    <p>Gaël Faye (Auteur) </p>
                </div>
                
                <div className="image-wrapper">
                    <img src={She} alt="Livre 2" className="small-image" />
                    <button className="button">Poésie</button>
                    <p>Rupi Kaur (Auteur) </p>
                </div>
                
                <div className="image-wrapper">
                    <img src={Carrou} alt="Livre 3" className="small-image" />
                    <button className="button">Guide</button>
                    <p>Robert Laffont (Auteur) </p>
                </div>
            </div>


            <div className='contien'>
                <div className="image-wrapper">
                    <img src={Devello} alt="Livre 1" className="small-image" />
                    <button className="button">Roman</button>
                    <p>Gaël Faye (Auteur) </p>
                </div>
                
                <div className="image-wrapper">
                    <img src={She} alt="Livre 2" className="small-image" />
                    <button className="button">Poésie</button>
                    <p>Rupi Kaur (Auteur) </p>
                </div>
                
                <div className="image-wrapper">
                    <img src={Carrou} alt="Livre 3" className="small-image" />
                    <button className="button">Guide</button>
                    <p>Robert Laffont (Auteur) </p>
                </div>
            </div>


          






    </div>

    
  );
};

export default Categori;
