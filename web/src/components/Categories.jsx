import React from 'react';
import './Categories.css';
import ig1 from '../assets/ig1.jpg';
import ig2 from '../assets/ig2.jpg';
import ig3 from '../assets/ig3.jpg';

const CATEGORIES = [
    { name: 'Bikinis', count: '42 artículos', image: ig1 },
    { name: 'Enterizos', count: '28 artículos', image: ig2 },
    { name: 'Accesorios', count: '15 artículos', image: ig3 }
];

const Categories = () => {
    return (
        <section className="categories section-padding container">
            <div className="category-grid">
                {CATEGORIES.map((cat, index) => (
                    <div key={index} className="category-card">
                        <img src={cat.image} alt={cat.name} />
                        <div className="category-overlay">
                            <div className="category-info">
                                <span>{cat.count}</span>
                                <h3>{cat.name}</h3>
                                <a href={`#${cat.name.toLowerCase()}`} className="shop-link">Explorar Colección</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Categories;
