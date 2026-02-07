import React from 'react';
import './Hero.css';
import heroImg from '../assets/hero.jpg';

const heroImage = heroImg;

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-image-container">
                <img
                    src={heroImage}
                    alt="Alora Swimwear Collection"
                    className="hero-bg"
                    loading="eager"
                />
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content container">
                <h1 className="animate-fade-up">Elegancia Tropical <br /><span>Redefinida</span></h1>
                <p className="animate-fade-up" style={{ animationDelay: '0.15s' }}>
                    Descubre la nueva colección de Alora Swimwear. Inspirada por el sol,
                    creada para la musa moderna.
                </p>
                <div className="hero-actions animate-fade-up" style={{ animationDelay: '0.3s' }}>
                    <a href="#shop" className="btn btn-primary">Comprar Ahora</a>
                    <a href="#collections" className="btn btn-secondary">Verano 2026</a>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <div className="mouse"></div>
                <span>Explorar</span>
            </div>
        </section>
    );
};

export default Hero;
