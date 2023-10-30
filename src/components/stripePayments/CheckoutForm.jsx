import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Alert, Button, CircularProgress } from "@mui/material";
import { postApi } from "../../config/configAxios"; 

const CheckoutForm = ({ closeModal, propertyInfo }) => {
  const { actualPrice } = propertyInfo;

  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


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
        // other parameters
      },
    });
 
    if (error) {
      console.error('Error confirming payment:', error);
    } else {
      console.error('unacception error');
    }
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
              {actualPrice + "$"}{" "}
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
