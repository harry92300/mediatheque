import React from 'react';
import './App.css';
import Acc from './composant/Acc';
import Inscription from './composant/Inscription';
import Connection from './composant/Connection'
import Categoei from './composant/Categori'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Acc />} />
      <Route path='/inscription' element={<Inscription/>} />
      <Route path='/Connexion' element={<Connection/>} />
      <Route path='/Catégorie de Livre' element={<Categoei/>} />


    </Routes>
  );
}

export default App;
