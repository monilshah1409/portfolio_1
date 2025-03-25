import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header>
            <Link to="/" className="logo" onClick={closeMenu}>
                <i className="fas fa-code"></i>
                <h1>Portfolio</h1>
            </Link>

            <button className="menu-icon" onClick={toggleMenu}>
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>

            <nav>
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    {/* <li><Link to="/" onClick={closeMenu}>Home</Link></li> */}
                    <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                    <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
                    <li><Link to="/skills" onClick={closeMenu}>Skills</Link></li>
                    <li><Link to="/education" onClick={closeMenu}>Education</Link></li>
                    <li><Link to="/certifications" onClick={closeMenu}>Certifications</Link></li>
                    <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                </ul>
            </nav>

            {isMenuOpen && (
                <div className={`nav-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
            )}
        </header>
    );
};

export default Header; 