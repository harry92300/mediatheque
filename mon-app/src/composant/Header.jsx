import '../style/Header.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../image/La de lecture bonne literature.mp4'


export default function Header() {
  return (
    <header className="header">
        <div className="logo">
            <video width="100" height="100" controls>
                <source src={Logo} type="video/mp4" />
            </video>
        </div>
        <nav className="nav">
            <ul>
                <li><Link to="/inscription">Inscription</Link></li>
                <li><a href="/Connexion">Connexion</a></li>
                <li><a href="/Catégorie de Livre">Catégorie de Livre</a></li>
                <li><a href="/">Bienvenue</a></li>
            </ul>
        </nav>
    </header>
  )
}
