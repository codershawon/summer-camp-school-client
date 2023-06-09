import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import useClass from '../../hooks/useClass';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise=loadStripe(import.meta.env.VITE_Payment_Gateway_Pk)
const Payment = () => {
    const [bookedClass]=useClass()
    const total = bookedClass.reduce((sum, item) => item.price + sum, 0);
    const price=parseFloat(total.toFixed(2))
    return (
        <div>
            <Elements stripe={stripePromise}> <CheckoutForm bookedClass={bookedClass} price={price}></CheckoutForm></Elements>
        </div>
    );
};

export default Payment;