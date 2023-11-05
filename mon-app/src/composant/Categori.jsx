import React from 'react';
import '../style/Categori.css';
import Carrousel1 from '../image/carrousel1.jpg'
import Carrousel2 from '../image/carrousel2.jpg'
import Carrousel3 from '../image/carrousel3.jpg'


export default function Categori() {
  return (

    
    <div className="categories-container">
      <h2 className='mesCategori'>Catégories de Livres</h2>

      <div className='image1'>
      <img src={Carrousel1} alt="images" style={{ maxWidth: '1500px', width: '100%', height: '100vh' }} />
      <img src={Carrousel2} alt="images2" style={{ maxWidth: '1500px', width: '100%', height: '100vh' }} />
      <img src={Carrousel3} alt="images3" style={{ maxWidth: '1500px', width: '100%', height: '100vh' }} />

      <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
  <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>

  </div>




      
    </div>
  );
}
