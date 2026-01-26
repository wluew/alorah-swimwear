import React from 'react';
import './About.css';
import Reveal from '../components/Reveal';

// Imágenes de Instagram para la página About
const aboutImages = [
    'https://scontent-mia3-3.cdninstagram.com/v/t51.82787-15/611738246_17992441628866455_549189247326767495_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=108&ig_cache_key=MzgwNzgwMTk1MTQ4OTI2ODk3MzE3OTkyNDQxNjIyODY2NDU1.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjUxMHg5MDIuc2RyLkMzIn0%3D&_nc_ohc=Byn585kOMEUQ7kNvwFw5KB0&_nc_oc=AdlGQU9du5RxjkjC4jZpgIkHn_96zEEPDwCB0V2NJAk6yio0Wb5OsK6-hPllf6Cmlqg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-mia3-3.cdninstagram.com&_nc_gid=4uYKoQerF9SHpuZV0IVK9A&oh=00_AfqNQYxjpZy3tLAJqwekFNQc3HPBRMot-Me_Gl2vOMhZRA&oe=6979426F',
    'https://scontent-mia3-2.cdninstagram.com/v/t51.82787-15/619906379_17993459723866455_5725686459540607372_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=105&ig_cache_key=MzgxNTEyOTc2MzA4MjU3Mjc4OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5oZHIuQzMifQ%3D%3D&_nc_ohc=vgtMyCg2WlMQ7kNvwG1HRlI&_nc_oc=Adn3eVZZGUGv6wZ5hNT_XfQJpVhyv6x7Ihuguu7IAF0TWE9JvfNcMMLT98dZpYTSsFU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_gid=4uYKoQerF9SHpuZV0IVK9A&oh=00_AfpKerDIm84s49bt85sdq8t1t5m4Kvx9X5uXCwj72uKLuA&oe=6979569A',
    'https://scontent-mia5-1.cdninstagram.com/v/t51.82787-15/618643964_17993275811866455_9154089267648411217_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=102&ig_cache_key=MzgxMzczMjczMzQ2NjY4MDg2Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5oZHIuQzMifQ%3D%3D&_nc_ohc=Y4Xqgnq8-80Q7kNvwFPkbSF&_nc_oc=AdlQZSipzblQcxQSHuaaOcA8nN1dyi2z2WzmJ_wuMwIvNQYsz3fpQ_h6I7AVy009xMA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-mia5-1.cdninstagram.com&_nc_gid=4uYKoQerF9SHpuZV0IVK9A&oh=00_AfqPLZD1-4FAvUM5ZX6FclPim2o2CIaGf28-zAivJALG7A&oe=6979642D'
];

const About = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-overlay"></div>
                <div className="about-hero-content container">
                    <Reveal>
                        <span className="subtitle">Tu esencia bajo el sol</span>
                        <h1>Alorah</h1>
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
                                    En Alorah, entendemos que la conexión con el mar no entiende de calendarios.
                                    Vivimos donde el sol es una constante y el salitre es parte de nuestra historia.
                                    No nacimos simplemente para crear bikinis; nacimos para celebrar la libertad de
                                    ser mujer y la magia de esos momentos eternos donde el agua y la piel se encuentran.
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
                                    Por eso, en Alorah queremos que, al mirarte al espejo, veas algo más que una prenda:
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
                            <h3>Alorah: Vistiendo tus mejores días, siempre.</h3>
                            <a href="/#collections" className="btn btn-primary">Explorar Colección</a>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default About;
