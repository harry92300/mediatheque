import React from 'react';
import './App.css';
import Acc from './composant/Acc';
import Inscription from './composant/Inscription';
import Connection from './composant/Connection'
import Categoei from './composant/Categori'
import Pageadd from './composant/Pageadd'
import secrets from '../src/secrets';

import { Routes, Route } from "react-router-dom"

function App() {
  const dbPassword = secrets.dbPassword;
  console.log("GARRY100", dbPassword);


  return (
    <Routes>
      <Route path='/' element={<Acc />} />
      <Route path='/inscription' element={<Inscription/>} />
      <Route path='/Connexion' element={<Connection/>} />
      <Route path='/Catégorie de Livre' element={<Categoei/>} />
      <Route path='/pageadd' element={<Pageadd/>} />


    </Routes>
  );
}

export default App;
