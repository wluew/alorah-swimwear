import React from 'react';
import './Categories.css';

const CATEGORIES = [
    { name: 'Bikinis', count: '42 artículos', image: 'https://scontent-mia5-1.cdninstagram.com/v/t51.82787-15/618643964_17993275811866455_9154089267648411217_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=102&ig_cache_key=MzgxMzczMjczMzQ2NjY4MDg2Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5oZHIuQzMifQ%3D%3D&_nc_ohc=Y4Xqgnq8-80Q7kNvwFPkbSF&_nc_oc=AdlQZSipzblQcxQSHuaaOcA8nN1dyi2z2WzmJ_wuMwIvNQYsz3fpQ_h6I7AVy009xMA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-mia5-1.cdninstagram.com&_nc_gid=tpbAuGJWW9X5IeIeXExmHQ&oh=00_AfrwxJqaOQa8cshKP5T8N4UtLt81r6PsscKA0A2T9Qm0Vw&oe=6979642D' },
    { name: 'Enterizos', count: '28 artículos', image: 'https://scontent-mia3-2.cdninstagram.com/v/t51.82787-15/619906379_17993459723866455_5725686459540607372_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=105&ig_cache_key=MzgxNTEyOTc2MzA4MjU3Mjc4OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5oZHIuQzMifQ%3D%3D&_nc_ohc=vgtMyCg2WlMQ7kNvwG1HRlI&_nc_oc=Adn3eVZZGUGv6wZ5hNT_XfQJpVhyv6x7Ihuguu7IAF0TWE9JvfNcMMLT98dZpYTSsFU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_gid=tpbAuGJWW9X5IeIeXExmHQ&oh=00_AfqSB5s8x-fwRd8nqW1KuKs95-WZXAPs8TphfjhYzD4rjA&oe=6979569A' },
    { name: 'Accesorios', count: '15 artículos', image: 'https://scontent-mia3-3.cdninstagram.com/v/t51.82787-15/611738246_17992441628866455_549189247326767495_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=108&ig_cache_key=MzgwNzgwMTk1MTQ4OTI2ODk3MzE3OTkyNDQxNjIyODY2NDU1.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjUxMHg5MDIuc2RyLkMzIn0%3D&_nc_ohc=Byn585kOMEUQ7kNvwFw5KB0&_nc_oc=AdlGQU9du5RxjkjC4jZpgIkHn_96zEEPDwCB0V2NJAk6yio0Wb5OsK6-hPllf6Cmlqg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-mia3-3.cdninstagram.com&_nc_gid=tpbAuGJWW9X5IeIeXExmHQ&oh=00_AfrLik6xc_qK9IeEf3t04Ncvd_bwPgQvIMhLwex6aF5LYA&oe=6979426F' }
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
