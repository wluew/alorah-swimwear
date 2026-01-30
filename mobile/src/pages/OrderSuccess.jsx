import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './OrderSuccess.css';

const OrderSuccess = () => {
    const navigate = useNavigate();

    return (
        <div className="order-success-page">
            <div className="success-card">
                <div className="success-icon">
                    <CheckCircle size={64} strokeWidth={1} />
                </div>
                <h1>¡Gracias!</h1>
                <p>Tu pedido ha sido confirmado con éxito.</p>
                <div className="order-details">
                    <p>Orden: <strong>#AL-92834</strong></p>
                </div>
                <button className="btn btn-primary" onClick={() => navigate('/')}>
                    Volver al inicio <ArrowRight size={18} />
                </button>
            </div>
        </div>
    );
};

export default OrderSuccess;
