import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import {
    Elements,
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { ArrowLeft, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const stripePromise = loadStripe('pk_test_51SvBSm0TbF6ByRZMj9K9F2FLByq2IXsL8iIbMtdqZDBj4b8OVWD3W81S82zuf3TggVKCWInOfBi7OR6SWaifjzQb00CQYwIQ7P');

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { cartTotal, cartItems, clearCart } = useCart();
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsProcessing(true);
        setErrorMessage(null);

        try {
            const response = await fetch('http://localhost:4242/create-payment-intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: cartTotal,
                    items: cartItems.map(item => ({ id: item.id, quantity: item.quantity }))
                }),
            });

            const { clientSecret, error: backendError } = await response.json();

            if (backendError) {
                setErrorMessage(backendError);
                setIsProcessing(false);
                return;
            }

            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: document.getElementById('checkout-name-mobile')?.value || 'Cliente Alora Mobile',
                        email: document.getElementById('checkout-email-mobile')?.value,
                    },
                },
            });

            if (result.error) {
                setErrorMessage(result.error.message);
                setIsProcessing(false);
            } else {
                if (result.paymentIntent.status === 'succeeded') {
                    setIsProcessing(false);
                    clearCart();
                    navigate('/order-success');
                }
            }
        } catch (err) {
            setErrorMessage('Error al conectar con el servidor.');
            setIsProcessing(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="checkout-form">
            <div className="checkout-form-group">
                <h3>Información de Contacto</h3>
                <div className="input-field">
                    <label>Correo Electrónico</label>
                    <input id="checkout-email-mobile" type="email" placeholder="tu@email.com" required />
                </div>
            </div>

            <div className="checkout-form-group">
                <h3>Envío</h3>
                <div className="input-field">
                    <label>Nombre Completo</label>
                    <input id="checkout-name-mobile" type="text" placeholder="Nombre y Apellido" required />
                </div>
                <div className="input-field">
                    <label>Dirección</label>
                    <input type="text" placeholder="Calle, Número, Apto" required />
                </div>
                <div className="input-row">
                    <div className="input-field">
                        <label>Ciudad</label>
                        <input type="text" placeholder="Ciudad" required />
                    </div>
                </div>
            </div>

            <div className="checkout-form-group">
                <h3>Pago Seguro</h3>
                <div className="stripe-element-container">
                    <CardElement options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                        },
                    }} />
                </div>
                {errorMessage && <div className="error-message" style={{ color: '#9e2146', fontSize: '14px', marginTop: '10px' }}>{errorMessage}</div>}
            </div>

            <button
                type="submit"
                className="btn btn-primary pay-button"
                disabled={!stripe || isProcessing}
            >
                {isProcessing ? 'Procesando...' : `Pagar $${cartTotal}`}
            </button>
        </form>
    );
};

const Checkout = () => {
    const { cartItems, cartTotal } = useCart();
    const navigate = useNavigate();

    return (
        <div className="checkout-page section-padding">
            <div className="container">
                <button className="back-btn" onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', cursor: 'pointer' }}>
                    <ArrowLeft size={20} /> Volver
                </button>

                <div className="checkout-container">
                    <div className="checkout-form-section">
                        <h2>Finalizar Compra</h2>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm />
                        </Elements>
                    </div>

                    <div className="order-summary-section">
                        <h3>Tu Pedido</h3>
                        <div className="summary-items">
                            {cartItems.map(item => (
                                <div key={item.id} className="summary-item">
                                    <div className="summary-item-info">
                                        <h4>{item.name} x {item.quantity}</h4>
                                        <p>${item.price * item.quantity}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="summary-totals">
                            <div className="summary-row total">
                                <span>Total</span>
                                <span>${cartTotal}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
