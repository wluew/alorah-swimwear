import React from 'react';
import './Hero.css';
// Real Instagram Image URL for Hero
const heroImage = 'https://scontent-mia5-2.cdninstagram.com/v/t51.71878-15/616167782_1586186412943424_9118129228551090371_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=100&ig_cache_key=MzgxMjE0NDQ1MzIxODM4MzU4MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=jUkWFZfYJxgQ7kNvwFIQ2fv&_nc_oc=AdkxYLBHr9eBrv3onpZPkqNH3hbGCqjKI4QyNjG0jsDgKEqQ_O4kx3vDRn9RoBvaRrE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-mia5-2.cdninstagram.com&_nc_gid=tpbAuGJWW9X5IeIeXExmHQ&oh=00_Afo6ijgnKMlU6LpNbYnnBZmVQjYVqMdDPG3nsbH_2VYWDg&oe=697941C2';


const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-image-container">
                <img
                    src={heroImage}
                    alt="Alorah Swimwear Collection"
                    className="hero-bg"
                    loading="eager"
                />
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content container">
                <h1 className="animate-fade-up">Elegancia Tropical <br /><span>Redefinida</span></h1>
                <p className="animate-fade-up" style={{ animationDelay: '0.15s' }}>
                    Descubre la nueva colección de Alorah Swimwear. Inspirada por el sol,
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
