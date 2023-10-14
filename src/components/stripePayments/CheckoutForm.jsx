import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Alert, Button, CircularProgress } from "@mui/material";
import Swal from "sweetalert2";
import { postApi } from "../../config/configAxios"; 

const CheckoutForm = ({ closeModal, propertyInfo }) => {
  const { actualPrice } = propertyInfo;

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
          // console.log(paymentIntent);
          performSuccessAction(paymentIntent);
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

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
        // other parameters
      },
    });

    if (!error) {
      // Payment is confirmed successfully, now save payment info to your database
      const paymentInfo = {
        stripeId: paymentIntent.id
      };

      // Make an API call to save paymentInfo to your database
      // await axios.post('/api/save-payment', paymentInfo);
      performSuccessAction(paymentInfo);
      // Redirect to the return_url
      window.location.href = paymentIntent.return_url;
    } else {
      // Handle the error
      console.error('Error confirming payment:', error);
    }
    // } else {
    //   // Perform your action here
    //   performSuccessAction(paymentIntent);
    //   Swal.fire("Good job!", "You clicked the button!", "success"); 
    //   // Set a success message or redirect to a success page
    //   setMessage("Success! Payment received."); 
    // }
    setIsLoading(false); 
  };

  // Define your success action function, for example, redirecting to a success page
  const performSuccessAction = (propertyInfo) => { 
    postApi("/payment-booking-propery", propertyInfo) 
      .then((res) => console.log(res.data)) 
      .catch((error) => console.log(error));  
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
      <div style={{ marginTop: "10px" }}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
      </div>
      <Button
        variant="contained"
        fullWidth
        disabled={actualPrice < 1 || isLoading || !stripe || !elements}
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
            <span style={{ marginRight: "5px" }}>
              {actualPrice.toFixed(2) + "$"}{" "}
            </span>{" "}
            <span id="button-text">Pay now</span>
          </>
        )}
      </Button>

      {message && <Alert severity="error">{message}</Alert>}
    </form>
  );
};

export default CheckoutForm;
