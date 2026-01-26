import React from 'react';
import './ProductCard.css';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="product-card">
            <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-badge">{product.badge}</div>
                <button className="quick-add" onClick={() => addToCart(product)}>

                    <ShoppingBag size={18} />
                    <span>Añadir</span>
                </button>
            </div>
            <div className="product-info">
                <div className="product-details">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-category">{product.category}</p>
                </div>
                <div className="product-price">${product.price}</div>
            </div>
        </div>
    );
};

export default ProductCard;
