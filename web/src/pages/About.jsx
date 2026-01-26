import React from 'react';
import './About.css';
import Reveal from '../components/Reveal';

import ig1 from '../assets/ig1.jpg';
import ig2 from '../assets/ig2.jpg';
import ig3 from '../assets/ig3.jpg';

// Imágenes importadas localmente para asegurar carga confiable
const aboutImages = [ig1, ig2, ig3];

const About = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-overlay"></div>
                <div className="about-hero-content container">
                    <Reveal>
                        <span className="subtitle">Tu esencia, siempre presente</span>
                        <h1>Alorah</h1>
                        <p>Vistiendo tu mejor versión.</p>
                    </Reveal>
                </div>
            </section>

            {/* Main Content */}
            <section className="about-content section-padding">
                <div className="container">
                    <div className="about-grid">
                        <Reveal>
                            <div className="about-text-block">
                                <h2>Tu esencia, siempre presente</h2>
                                <p>
                                    En Alorah, creemos que la relación con el mar es una forma de libertad. No diseñamos
                                    simplemente trajes de baño; creamos piezas que celebran a la mujer que se siente plena
                                    siendo ella misma, sin filtros y sin pretensiones.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay="0.2s">
                            <div className="about-image">
                                <img src={aboutImages[0]} alt="Alorah Swimwear" />
                            </div>
                        </Reveal>
                    </div>

                    <div className="about-grid reverse">
                        <Reveal>
                            <div className="about-image">
                                <img src={aboutImages[1]} alt="El arte de la intención" />
                            </div>
                        </Reveal>

                        <Reveal delay="0.2s">
                            <div className="about-text-block">
                                <h2>El arte de la intención</h2>
                                <p>
                                    Nuestra filosofía se basa en la creación consciente. Cada diseño es una combinación
                                    equilibrada de textiles premium y acabados impecables, pensados para abrazar tu cuerpo,
                                    nunca juzgarlo.
                                </p>
                                <p>
                                    Apostamos por siluetas que realzan tu figura natural, ofreciendo la comodidad y
                                    resistencia necesarias para acompañarte en cada momento donde te sientas viva.
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    <div className="about-grid">
                        <Reveal>
                            <div className="about-text-block">
                                <h2>Seguridad en cada detalle</h2>
                                <p>
                                    Entendemos que un traje de baño es mucho más que una prenda: es actitud y confianza.
                                    En Alorah, trabajamos para que, al mirarte al espejo, veas una versión de ti que se
                                    quiere, se acepta y se disfruta.
                                </p>
                                <p>
                                    Nuestra misión es que cada mujer se sienta increíble en su propia piel, proyectando
                                    esa seguridad que nace de la autenticidad.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay="0.2s">
                            <div className="about-image">
                                <img src={aboutImages[2]} alt="Seguridad en cada detalle" />
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Closing Statement */}
            <section className="about-closing">
                <div className="container">
                    <Reveal>
                        <div className="closing-content">
                            <p className="closing-text">
                                Queremos ser parte de tu historia en la arena, en la orilla o en esos viajes que siempre
                                quisiste hacer. Estamos aquí para vestir tus mejores momentos y recordarte que, cuando
                                te sientes bien contigo misma, estás exactamente donde quieres estar.
                            </p>
                            <h3>Alorah: Vistiendo tu mejor versión.</h3>
                            <a href="/#collections" className="btn btn-primary">Explorar Colección</a>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default About;
