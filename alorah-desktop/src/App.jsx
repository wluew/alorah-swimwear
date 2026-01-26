import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import Categories from './components/Categories'
import Cart from './components/Cart'
import { CartProvider } from './context/CartContext'
import Reveal from './components/Reveal'



// Real Instagram Image URLs (Freshly extracted from @alorahswimwear while logged in)
const IG_IMAGES = [
  'https://scontent-mia3-3.cdninstagram.com/v/t51.82787-15/611738246_17992441628866455_549189247326767495_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=108&ig_cache_key=MzgwNzgwMTk1MTQ4OTI2ODk3MzE3OTkyNDQxNjIyODY2NDU1.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjUxMHg5MDIuc2RyLkMzIn0%3D&_nc_ohc=Byn585kOMEUQ7kNvwFw5KB0&_nc_oc=AdlGQU9du5RxjkjC4jZpgIkHn_96zEEPDwCB0V2NJAk6yio0Wb5OsK6-hPllf6Cmlqg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-mia3-3.cdninstagram.com&_nc_gid=4uYKoQerF9SHpuZV0IVK9A&oh=00_AfqNQYxjpZy3tLAJqwekFNQc3HPBRMot-Me_Gl2vOMhZRA&oe=6979426F',
  'https://scontent-mia3-2.cdninstagram.com/v/t51.82787-15/619906379_17993459723866455_5725686459540607372_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=105&ig_cache_key=MzgxNTEyOTc2MzA4MjU3Mjc4OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5oZHIuQzMifQ%3D%3D&_nc_ohc=vgtMyCg2WlMQ7kNvwG1HRlI&_nc_oc=Adn3eVZZGUGv6wZ5hNT_XfQJpVhyv6x7Ihuguu7IAF0TWE9JvfNcMMLT98dZpYTSsFU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_gid=4uYKoQerF9SHpuZV0IVK9A&oh=00_AfpKerDIm84s49bt85sdq8t1t5m4Kvx9X5uXCwj72uKLuA&oe=6979569A',
  'https://scontent-mia5-1.cdninstagram.com/v/t51.82787-15/618643964_17993275811866455_9154089267648411217_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=102&ig_cache_key=MzgxMzczMjczMzQ2NjY4MDg2Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5oZHIuQzMifQ%3D%3D&_nc_ohc=Y4Xqgnq8-80Q7kNvwFPkbSF&_nc_oc=AdlQZSipzblQcxQSHuaaOcA8nN1dyi2z2WzmJ_wuMwIvNQYsz3fpQ_h6I7AVy009xMA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-mia5-1.cdninstagram.com&_nc_gid=4uYKoQerF9SHpuZV0IVK9A&oh=00_AfqPLZD1-4FAvUM5ZX6FclPim2o2CIaGf28-zAivJALG7A&oe=6979642D',
  'https://scontent-mia5-1.cdninstagram.com/v/t51.82787-15/619657623_17993271302866455_8657708891563475002_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=MzgxMzcwMTE3NjExODkxMjcxNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkwNC5zZHIuQzMifQ%3D%3D&_nc_ohc=doe1OLnMCnIQ7kNvwGOisfS&_nc_oc=Adk_e1GlcsTJV-HhQH9S5XRHULDBcQZRzBUqzLP_RGi5H1x3BKw_tnaGbXKRpRMJ22g&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-mia5-1.cdninstagram.com&_nc_gid=4uYKoQerF9SHpuZV0IVK9A&oh=00_AfofPolA1ONLxAGG6BUm6GEG1rH6GC1jHe68nExpJ2LtPQ&oe=6979528C',
  'https://scontent-mia3-2.cdninstagram.com/v/t51.82787-15/619271961_17993250077866455_1495008341181995114_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=MzgxMzU4MjE5NDU2MDg4NDA0Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTg3Mi5zZHIuQzMifQ%3D%3D&_nc_ohc=kIrMPMghgTUQ7kNvwH50cOo&_nc_oc=Adlz8Uef651drGoGIDIfeaFFaNObZJdeUS7GzJJNtLoEKAYq3V4vgt5ioXmjfyw513c&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_gid=4uYKoQerF9SHpuZV0IVK9A&oh=00_AfqyBIZJ8WhP78FtofGgzUpcy6ZpdAdn8IdQxRM3cvmYIQ&oe=69795AAA',
  'https://scontent-mia5-2.cdninstagram.com/v/t51.71878-15/616167782_1586186412943424_9118129228551090371_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=100&ig_cache_key=MzgxMjE0NDQ1MzIxODM4MzU4MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=jUkWFZfYJxgQ7kNvwFIQ2fv&_nc_oc=AdkxYLBHr9eBrv3onpZPkqNH3hbGCqjKI4QyNjG0jsDgKEqQ_O4kx3vDRn9RoBvaRrE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-mia5-2.cdninstagram.com&_nc_gid=4uYKoQerF9SHpuZV0IVK9A&oh=00_Afrqz5lWcTNXtA8RU3KcUTDum67EYxqVRex76fp7CZ65MQ&oe=697941C2',
  'https://scontent-mia5-1.cdninstagram.com/v/t51.82787-15/613599430_17992836443866455_7196088357667310796_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=MzgxMDcxODk5NTk2MDQ0MTY1MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=xvYtfyn8G5YQ7kNvwG1HRlI&_nc_oc=AdmKrSByoabzAHK78XVkj4oDBiyV_5B99qHUGKp40ekXby8DTOUG0nq22qz3gD-E2Xc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-mia5-1.cdninstagram.com&_nc_gid=4yyRk7TWtXJMcR8DFK_H5A&oh=00_Afq9c3Qhpenw5-xpjVN-SlFl2q83Ekgb3UOPsbs4HmCyFw&oe=69796CD2',
  'https://scontent-mia5-1.cdninstagram.com/v/t51.82787-15/616867510_17992713854866455_5259974756214345902_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=MzgwOTg3MDcyNjkwMDM4NTc3OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEzMjB4MTI2NC5zZHIuQzMifQ%3D%3D&_nc_ohc=6cXCV4qbx4YQ7kNvwEV6afy&_nc_oc=AdlVNfqH0JCVnGxJTVO1g6maxUoKNvxHGimPcCpRdSaajD5r575_OLztgtw2tNPVPp4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-mia5-1.cdninstagram.com&_nc_gid=4yyRk7TWtXJMcR8DFK_H5A&oh=00_AfqRufP8tVmpKFbe1qZdBqFUKs-59s9EbwYXW1XRJBHwWg&oe=697963CD'
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

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <Cart />
        <main>
          <Hero />
          <Reveal>
            <Categories />
          </Reveal>


          <section id="about" className="brand-story section-padding container">
            <div className="brand-story-grid">
              <Reveal duration="1.2s">
                <div className="brand-story-image">
                  <img src={IG_IMAGES[4]} alt="Our Story" />
                </div>
              </Reveal>
              <Reveal duration="1.2s" delay="0.2s">
                <div className="brand-story-content">
                  <span className="subtitle">Desde 2021</span>
                  <h2>Creado en el Paraíso</h2>
                  <p>
                    Alorah Swimwear nació del amor por el océano y el deseo de crear
                    trajes de baño que hagan que cada mujer se sienta como una diosa. Cada pieza es diseñada meticulosamente con telas italianas de primera calidad, asegurando tanto la comodidad como un ajuste impecable.
                  </p>
                  <p>
                    Nuestros diseños se inspiran en los colores vibrantes de los trópicos y la elegancia sin esfuerzo de la vida costera. Únete a nuestra misión de traer un pedazo de paraíso a tu guardarropa.
                  </p>
                  <a href="#shop" className="btn btn-secondary" style={{ color: 'var(--text-main)', borderColor: 'var(--text-main)' }}>Leer más</a>
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
                <Reveal key={product.id} delay={`${index * 0.1}s`}>
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
                  <Reveal key={index} delay={`${index * 0.05}s`}>
                    <div className="ig-item">
                      <img src={src} alt={`Instagram ${index + 1}`} />
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
  )
}

export default App


