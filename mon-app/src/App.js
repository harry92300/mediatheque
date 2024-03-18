import React from 'react';
import './App.css';
import Acc from './composant/Acc';
import Inscription from './composant/Inscription';
import Connection from './composant/Connection'
import Categoei from './composant/Categori'
import Pageadd from './composant/Pageadd'


import { Routes, Route } from "react-router-dom"
import ModifierLivres from './composant/ModifierLivres';

function App() {



  return (
    <Routes>
      <Route path='/' element={<Acc />} />
      <Route path='/inscription' element={<Inscription/>} />
      <Route path='/Connexion' element={<Connection/>} />
      <Route path='/Catégorie de Livre' element={<Categoei/>} />
      <Route path='/pageadd' element={<Pageadd/>} />
      <Route path='/modifierlivres/:id' element={<ModifierLivres/>} />

    </Routes>
  );
}

export default App;
