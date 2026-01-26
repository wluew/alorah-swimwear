import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setIsCartOpen, cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="nav-left">
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><a href="#shop">Tienda</a></li>
            <li><a href="#collections">Colecciones</a></li>
            <li><a href="#about">Nuestra Historia</a></li>
          </ul>
        </div>

        <div className="nav-center">
          <a href="/" className="logo">ALORAH</a>
        </div>

        <div className="nav-right">
          <button className="nav-icon-btn"><Search size={20} /></button>
          <button className="nav-icon-btn cart-btn" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag size={20} />
            <span className="cart-count">{cartCount}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
