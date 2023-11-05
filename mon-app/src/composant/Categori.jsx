import React from 'react';
import '../style/Categori.css';

export default function Categori() {
  return (
    <div className="categories-container">
      <h2>Catégories de Livres</h2>
      <ul className="categories-list">
        <li><span className="category-icon"></span>Romans</li>
        <li><span className="category-icon"></span>Science-Fiction</li>
        <li><span className="category-icon"></span>Mystère</li>
        {/* Ajoutez d'autres catégories au besoin */}
      </ul>

      
    </div>
  );
}
