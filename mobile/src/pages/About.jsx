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
                        <span className="subtitle">Tu esencia bajo el sol</span>
                        <h1>Alora</h1>
                        <p>Vistiendo tus mejores días, siempre.</p>
                    </Reveal>
                </div>
            </section>

            {/* Main Content */}
            <section className="about-content section-padding">
                <div className="container">
                    <div className="about-grid">
                        <Reveal>
                            <div className="about-text-block">
                                <h2>Tu esencia bajo el sol</h2>
                                <p>
                                    En Alora, entendemos que la conexión con el mar no entiende de calendarios.
                                    Vivimos donde el sol es una constante y el salitre es parte de nuestra historia.
                                    No nacimos simplemente para crear bikinis; nacimos para celebrar la libertad de
                                    ser mujer y la magia de esos momentos eternos donde el agua y la piel se encuentran.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay="0.2s">
                            <div className="about-image">
                                <img src={aboutImages[0]} alt="Alora Swimwear" />
                            </div>
                        </Reveal>
                    </div>

                    <div className="about-grid reverse">
                        <Reveal>
                            <div className="about-image">
                                <img src={aboutImages[1]} alt="Diseño con Intención" />
                            </div>
                        </Reveal>

                        <Reveal delay="0.2s">
                            <div className="about-text-block">
                                <h2>Diseñado con Intención</h2>
                                <p>
                                    Cada una de nuestras piezas nace de un proceso consciente y dedicado. Desde la
                                    selección de textiles de alta calidad hasta la precisión en los acabados, trabajamos
                                    con un propósito claro: abrazar tu cuerpo, nunca juzgarlo.
                                </p>
                                <p>
                                    Creamos siluetas que realzan tu forma natural y detalles que marcan la diferencia,
                                    asegurando que cada prenda sea tan resistente y cómoda como el ritmo de tu día a día.
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    <div className="about-grid">
                        <Reveal>
                            <div className="about-text-block">
                                <h2>Tu seguridad es nuestra prioridad</h2>
                                <p>
                                    Sabemos que un traje de baño es la prenda más íntima que compartes con el mundo.
                                    Por eso, en Alora queremos que, al mirarte al espejo, veas algo más que una prenda:
                                    veas una versión de ti que se celebra, se acepta y se disfruta.
                                </p>
                                <p>
                                    Creemos firmemente que todas las mujeres merecen sentirse increíbles, proyectando
                                    esa seguridad que nace de estar cómoda en su propia piel.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay="0.2s">
                            <div className="about-image">
                                <img src={aboutImages[2]} alt="Tu seguridad" />
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
                                Queremos estar ahí contigo, en la orilla, en la arena o en esa tarde de piscina
                                espontánea, vistiendo esos instantes donde el sol te toca la piel y sientes que,
                                sencillamente, aquí es donde quieres estar.
                            </p>
                            <h3>Alora: Vistiendo tus mejores días, siempre.</h3>
                            <a href="/#collections" className="btn btn-primary">Explorar Colección</a>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default About;
