import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <Cart />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <footer className="footer container section-padding">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>ALORAH</h3>
              <p>Lujo tropical para la musa moderna.</p>
            </div>
            <div className="footer-links">
              <div>
                <h4>Tienda</h4>
                <ul>
                  <li><a href="#">Bikinis</a></li>
                  <li><a href="#">Enterizos</a></li>
                  <li><a href="#">Accesorios</a></li>
                </ul>
              </div>
              <div>
                <h4>Soporte</h4>
                <ul>
                  <li><a href="#">Envíos</a></li>
                  <li><a href="#">Devoluciones</a></li>
                  <li><a href="#">Contacto</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Alorah Swimwear. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;


