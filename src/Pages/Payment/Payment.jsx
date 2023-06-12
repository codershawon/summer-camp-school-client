import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import useClass from '../../hooks/useClass';
import SectionTitle from '../../components/SectionTitle';
const stripePromise=loadStripe(import.meta.env.VITE_Payment_Gateway_Pk)
const Payment = () => {
    const [bookedClass]=useClass()
    const total = bookedClass.reduce((sum, item) => item.price + sum, 0);
    const price=parseFloat(total.toFixed(2))
    return (
        <div>
            <SectionTitle  heading="PAYMENT" />
            <Elements stripe={stripePromise}> <CheckoutForm bookedClass={bookedClass}  price={price}></CheckoutForm></Elements>
        </div>
    );
};
export default Payment;