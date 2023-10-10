import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Alert, Button, CircularProgress } from "@mui/material";

const CheckoutForm = ({ closeModal }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );
    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Success! Payment received.");
          break;

        case "processing":
          setMessage(
            "Payment processing. We'll update you when payment is received."
          );
          break;

        case "requires_payment_method":
          // Redirect your user back to your payment page to attempt collecting
          // payment again
          setMessage("Payment failed. Please try another payment method.");
          break;

        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred");
    }
    setIsLoading(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.value.email);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <form id="payment" onSubmit={handleSubmit}>
      <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={handleEmailChange}
      />
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <Button
        variant="contained"
        fullWidth
        disabled={isLoading || !stripe || !elements}
        id="submit"
        sx={{
          mt: 3,
          mb: 2,
        }}
        type="submit" 
      >
        {isLoading ? (
          <CircularProgress size={24} color="primary" />
        ) : (
          <>
            {"23$"} <span id="button-text">Pay now</span>
          </>
        )}
      </Button>

      {message && <Alert severity="error">{message}</Alert>}
    </form>
  );
};

export default CheckoutForm;
