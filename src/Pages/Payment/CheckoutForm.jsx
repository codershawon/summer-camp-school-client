import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import "./CheckoutForm.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const CheckoutForm = ({ bookedClass, price }) => {
  const stripe = useStripe();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuth();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure("http://localhost:4000");
  const [processing, setProcessing] = useState(false);
  const [transactionID, setTransactionID] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    console.log("card", card);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      console.log("paymentMethod", paymentMethod);
    }
    setProcessing(true);
    // console.log(clientSecret)
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "unknown",
          },
        },
      });
    // Handle result.error or result.paymentIntent
    if (confirmError) {
      console.log(confirmError);
    }
    console.log(paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionID(paymentIntent.id);
      const payment = {
        email: user?.email,
        transactionID: paymentIntent.id,
        price,
        date: new Date(),
        totalClass: bookedClass.length,
        selectedClass: bookedClass.map((item) => item._id),
        classes: bookedClass.map((item) => item.classId),
        status: "service pending",
        className: bookedClass.map((item) => item.name),
        availableSeats:bookedClass.map((item) => ({
            availableSeats: item.availableSeats - 1,
          })),
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your payment for booking class successful',
                showConfirmButton: false,
                timer: 1500
              })
        }
      });
    }
  };
  return (
    <div>
      <h1
        id="checkout"
        className="text-center text-4xl font-bold mx-auto uppercase mb-10 mt-20"
      >
        Payment
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-[800px] mx-auto bg-gray-300 p-10 rounded-lg"
      >
        <CardElement
          className="bg-gray-200 p-2 rounded-lg"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-xs mt-4"
          style={{ backgroundColor: "#07332F" }}
          type="submit"
          disabled={!stripe || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-800 ml-52">{cardError}</p>}
      {transactionID && (
        <p className="text-blue-900 ml-20 text-xl">
          Payment complete with transactionID: {transactionID}
        </p>
      )}
    </div>
  );
};

export default CheckoutForm;