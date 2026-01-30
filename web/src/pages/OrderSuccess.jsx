import React, { useEffect } from 'react';
import { CheckCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './OrderSuccess.css';

const OrderSuccess = () => {
    const navigate = useNavigate();
    // Podríamos limpiar el carrito aquí si no se hizo antes

    return (
        <div className="order-success-page">
            <div className="success-card">
                <div className="success-icon">
                    <CheckCircle size={80} strokeWidth={1} />
                </div>
                <h1>¡Pedido Confirmado!</h1>
                <p>Gracias por tu compra. Hemos enviado los detalles de tu pedido a tu correo electrónico.</p>
                <div className="order-details">
                    <div className="order-number">
                        <span>Número de orden:</span>
                        <strong>#AL-92834</strong>
                    </div>
                </div>
                <div className="success-actions">
                    <button className="btn btn-primary" onClick={() => navigate('/')}>
                        Seguir comprando <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderSuccess;
