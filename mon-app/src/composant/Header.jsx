import '../style/Header.css'
import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header className="header">
        <div className="logo">
            
        </div>
        <nav className="nav">
            <ul>
                <li><Link to="/">Bienvenue</Link></li>
                <li><Link to="/Catégorie de Livre">Catégorie de Livre</Link></li>
                <li><Link to="/Connexion">Connexion</Link></li>
                <li><Link to="/inscription">Inscription</Link></li>
            </ul>
        </nav>
    </header>
  )
}
