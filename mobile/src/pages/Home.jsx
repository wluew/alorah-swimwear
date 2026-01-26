import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import ProductCard from '../components/ProductCard';
import Reveal from '../components/Reveal';
import { Link } from 'react-router-dom';

import ig1 from '../assets/ig1.jpg';
import ig2 from '../assets/ig2.jpg';
import ig3 from '../assets/ig3.jpg';
import ig5 from '../assets/ig5.jpg';
import ig6 from '../assets/ig6.jpg';

// Usamos las imágenes locales y repetimos algunas para llenar el grid de 8 y mantener las referencias de los productos
const IG_IMAGES = [
    ig1, // index 0 (Product 1)
    ig2, // index 1 (Product 2)
    ig3, // index 2 (Product 3)
    ig5, // index 3 (Product 4 - antes era una imagen distinta, usamos ig5)
    ig6, // index 4 (Product 5 & Brand Story)
    ig1, // index 5 (Grid item)
    ig2, // index 6 (Grid item)
    ig3  // index 7 (Product 6)
];

const PRODUCTS = [
    {
        id: 1,
        name: 'Teal Paradise Set',
        category: 'Bikini',
        price: 120,
        image: IG_IMAGES[0],
        badge: 'Novedad'
    },
    {
        id: 2,
        name: 'Coral Reef One-Piece',
        category: 'Enterizo',
        price: 85,
        image: IG_IMAGES[1],
        badge: 'Más Vendido'
    },
    {
        id: 3,
        name: 'Aurum Soleil Bikini',
        category: 'Bikini',
        price: 110,
        image: IG_IMAGES[2],
        badge: 'Exclusivo'
    },
    {
        id: 4,
        name: 'Azure Dream Set',
        category: 'Bikini',
        price: 95,
        image: IG_IMAGES[3],
        badge: 'Limitado'
    },
    {
        id: 5,
        name: 'Caribbean Sun Set',
        category: 'Bikini',
        price: 130,
        image: IG_IMAGES[4],
        badge: 'Nuevo'
    },
    {
        id: 6,
        name: 'Oceanic Blue Set',
        category: 'Enterizo',
        price: 90,
        image: IG_IMAGES[7],
        badge: 'Hot'
    }
];

const Home = () => {
    return (
        <>
            <Hero />
            <Reveal>
                <Categories />
            </Reveal>

            <section className="brand-story section-padding container">
                <div className="brand-story-grid">
                    <Reveal duration="0.8s">
                        <div className="brand-story-image">
                            <img
                                src={IG_IMAGES[4]}
                                alt="Our Story"
                                loading="lazy"
                            />
                        </div>
                    </Reveal>
                    <Reveal duration="0.8s" delay="0.1s">
                        <div className="brand-story-content">
                            <span className="subtitle">Tu esencia, siempre presente</span>
                            <h2>Alorah: Vistiendo tu mejor versión</h2>
                            <p>
                                En Alorah, creemos que la relación con el mar es una forma de libertad. No diseñamos
                                simplemente trajes de baño; creamos piezas que celebran a la mujer que se siente plena
                                siendo ella misma, sin filtros y sin pretensiones.
                            </p>
                            <p>
                                Nuestra filosofía se basa en la creación consciente. Cada diseño es una combinación
                                equilibrada de textiles premium y acabados impecables, pensados para abrazar tu cuerpo,
                                nunca juzgarlo.
                            </p>
                            <Link to="/about" className="btn btn-secondary" style={{ color: 'var(--text-main)', borderColor: 'var(--text-main)' }}>Leer más</Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section id="collections" className="collections container section-padding">
                <Reveal>
                    <div className="section-header">
                        <h2>La Colección Caribe</h2>
                        <p>Diseños etéreos para tus aventuras bajo el sol.</p>
                    </div>
                </Reveal>
                <div className="product-grid">
                    {PRODUCTS.map((product, index) => (
                        <Reveal key={product.id} delay={`${index * 0.05}s`}>
                            <ProductCard product={product} />
                        </Reveal>
                    ))}
                </div>
            </section>

            <section id="instagram" className="instagram section-padding">
                <div className="container">
                    <Reveal>
                        <div className="section-header">
                            <h2>Visto en Instagram</h2>
                            <p>Etiquétanos @AlorahSwimwear para aparecer aquí.</p>
                        </div>
                    </Reveal>
                    <div className="instagram-grid">
                        {IG_IMAGES.map((src, index) => (
                            <Reveal key={index} delay={`${index * 0.03}s`}>
                                <div className="ig-item">
                                    <img
                                        src={src}
                                        alt={`Instagram ${index + 1}`}
                                        loading="lazy"
                                    />
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <Reveal>
                <section className="newsletter section-padding">
                    <div className="container">
                        <div className="newsletter-card">
                            <div className="newsletter-content">
                                <h2>Únete a nuestro Escape Tropical</h2>
                                <p>Suscríbete para recibir noticias, ofertas exclusivas y más.</p>
                                <form className="newsletter-form">
                                    <input type="email" placeholder="Tu correo electrónico" required />
                                    <button type="submit" className="btn btn-primary">Suscribirse</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Reveal>
        </>
    );
};

export default Home;
