// Header.jsx
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.scss';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const closeMenu = (e) => {
            if (isMenuOpen && !e.target.closest('.header_nav') && !e.target.closest('.header_burger')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener('click', closeMenu);
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <header className='header'>
            <div className='header_initial'>
                <span>{'{'}</span> P <span>{'}'}</span>
            </div>
            <div className={`header_burger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={`header_nav ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
                <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projets</Link>
                <Link to="/skills" onClick={() => setIsMenuOpen(false)}>Compétences</Link>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </nav>
        </header>
    )
}