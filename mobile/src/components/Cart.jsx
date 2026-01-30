import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        setIsCartOpen(false);
        navigate('/checkout');
    };

    return (
        <>
            <div className={`cart-overlay ${isCartOpen ? 'open' : ''}`} onClick={() => setIsCartOpen(false)}></div>
            <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <div className="cart-header-title">
                        <ShoppingBag size={20} />
                        <h3>Tu Bolsa</h3>
                        <span>({cartItems.length})</span>
                    </div>
                    <button className="close-cart" onClick={() => setIsCartOpen(false)}>
                        <X size={24} />
                    </button>
                </div>

                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart">
                            <p>Tu bolsa está vacía</p>
                            <button className="btn btn-primary" onClick={() => setIsCartOpen(false)}>Explorar tienda</button>
                        </div>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <div className="cart-item-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="cart-item-info">
                                    <div className="cart-item-details">
                                        <h4>{item.name}</h4>
                                        <p>{item.category}</p>
                                    </div>
                                    <div className="cart-item-controls">
                                        <div className="quantity-selector">
                                            <button onClick={() => updateQuantity(item.id, -1)}><Minus size={14} /></button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, 1)}><Plus size={14} /></button>
                                        </div>
                                        <div className="cart-item-price">${item.price * item.quantity}</div>
                                    </div>
                                    <button className="remove-item" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-subtotal">
                            <span>Subtotal</span>
                            <span>${cartTotal}</span>
                        </div>
                        <p className="shipping-note">Impuestos y envío calculados al finalizar compra</p>
                        <button className="checkout-btn btn btn-primary" onClick={handleCheckout}>Finalizar Compra</button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;
