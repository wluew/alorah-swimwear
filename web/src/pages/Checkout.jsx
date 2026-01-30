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

// Reemplaza con tu clave pública de Stripe
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
            // 1. Crear el PaymentIntent en el backend
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

            // 2. Confirmar el pago con Stripe
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: document.getElementById('checkout-name')?.value || 'Cliente Alorah',
                        email: document.getElementById('checkout-email')?.value,
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
            setErrorMessage('Error al conectar con el servidor de pagos.');
            setIsProcessing(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="checkout-form">
            <div className="checkout-form-group">
                <h3>Información de Contacto</h3>
                <div className="input-field">
                    <label>Correo Electrónico</label>
                    <input id="checkout-email" type="email" placeholder="tu@email.com" required />
                </div>
            </div>

            <div className="checkout-form-group">
                <h3>Envío</h3>
                <div className="input-row">
                    <div className="input-field">
                        <label>Nombre</label>
                        <input id="checkout-name" type="text" placeholder="Nombre" required />
                    </div>
                    <div className="input-field">
                        <label>Apellido</label>
                        <input type="text" placeholder="Apellido" required />
                    </div>
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
                    <div className="input-field">
                        <label>Código Postal</label>
                        <input type="text" placeholder="CP" required />
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
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }} />
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
            </div>

            <button
                type="submit"
                className="btn btn-primary pay-button"
                disabled={!stripe || isProcessing}
            >
                {isProcessing ? 'Procesando...' : `Pagar $${cartTotal}`}
                {!isProcessing && <Lock size={16} style={{ marginLeft: '10px' }} />}
            </button>
            <p className="secure-note">
                <Lock size={12} /> Tus datos están protegidos por encriptación SSL.
            </p>
        </form>
    );
};

const Checkout = () => {
    const { cartItems, cartTotal } = useCart();
    const navigate = useNavigate();

    return (
        <div className="checkout-page section-padding">
            <div className="container">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <ArrowLeft size={20} /> Volver a la tienda
                </button>

                <div className="checkout-container">
                    <div className="checkout-form-section">
                        <h2>Finalizar Compra</h2>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm />
                        </Elements>
                    </div>

                    <div className="order-summary-section">
                        <h3>Resumen del Pedido</h3>
                        <div className="summary-items">
                            {cartItems.map(item => (
                                <div key={item.id} className="summary-item">
                                    <img src={item.image} alt={item.name} />
                                    <div className="summary-item-info">
                                        <h4>{item.name}</h4>
                                        <p>Cantidad: {item.quantity}</p>
                                        <p>${item.price * item.quantity}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="summary-totals">
                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>${cartTotal}</span>
                            </div>
                            <div className="summary-row">
                                <span>Envío</span>
                                <span>Gratis</span>
                            </div>
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
