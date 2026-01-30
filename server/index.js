require('dotenv').config();
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
    try {
        const { items, amount } = req.body;

        // El monto debe estar en centavos (ej: $10.00 = 1000)
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100),
            currency: 'usd',
            automatic_payment_methods: {
                enabled: true,
            },
            metadata: {
                // Aquí podrías guardar IDs de productos o referencia de orden
                order_id: 'AL-' + Math.floor(Math.random() * 100000)
            }
        });

        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error('Error creando el PaymentIntent:', error);
        res.status(500).send({ error: error.message });
    }
});

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log(`Servidor de Alorah corriendo en puerto ${PORT}`));
