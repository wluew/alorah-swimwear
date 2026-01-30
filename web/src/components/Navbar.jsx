import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCountAnimating, setIsCountAnimating] = useState(false);
  const { setIsCartOpen, cartCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    if (cartCount > 0) {
      setIsCountAnimating(true);
      const timer = setTimeout(() => setIsCountAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  // Helper for hash links
  const getHashLink = (hash) => {
    return location.pathname === '/' ? hash : `/${hash}`;
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="nav-left">
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><a href={getHashLink('#shop')} onClick={closeMenu}>Tienda</a></li>
            <li><a href={getHashLink('#collections')} onClick={closeMenu}>Colecciones</a></li>
            <li><Link to="/about" onClick={closeMenu}>Nuestra Historia</Link></li>
          </ul>
        </div>

        <div className="nav-center">
          <Link to="/" className="logo">ALORAH</Link>
        </div>

        <div className="nav-right">
          <button className="nav-icon-btn"><Search size={20} /></button>
          <button className="nav-icon-btn cart-btn" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag size={20} />
            <span className={`cart-count ${isCountAnimating ? 'bump' : ''}`}>{cartCount}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
