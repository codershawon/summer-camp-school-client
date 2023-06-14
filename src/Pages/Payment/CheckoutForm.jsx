import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const CheckoutForm = ({ bookedClass, price}) => {
  const stripe = useStripe();
  console.log(stripe);
  const { user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const elements = useElements();
  const [axiosSecure] = useAxiosSecure(
    "https://summer-camp-school-server-side.vercel.app"
  );
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
console.log(clientSecret)
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
      // Handle the error here, e.g., show an error message to the user
      setCardError(confirmError.message);
    }

    console.log(paymentIntent);
    setProcessing(false);

    if (paymentIntent && paymentIntent.status === "succeeded") {
      setTransactionID(paymentIntent.id);
      const payment = {
        image: bookedClass[0].image,
        instructorName: bookedClass[0].instructorName,
        id: bookedClass[0]._id,
        availableStudents:parseFloat((bookedClass[0].availableStudents)),
        email: user?.email,
        transactionId: paymentIntent.id,
        enrollmentDate: new Date(),
        enrollmentTime: new Date().toLocaleTimeString(),
        price: bookedClass[0].price,
        status: "service pending",
        className: bookedClass[0].name,
        availableSeats:parseFloat(bookedClass[0].availableSeats)-1
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your payment for booking class successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
      // navigate("/dashboard/enrolledClasses");
    }
  };

  return (
    <div>
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
