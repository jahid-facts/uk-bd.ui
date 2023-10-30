import React, { useEffect, useState } from "react";
import { Modal, Paper, Typography, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { postApi } from "../../config/configAxios";
import "./ReservationModal.css";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const ReservationModal = ({
  isOpen,
  onClose,
  propertyInfo,
}) => { 
  const [clientSecret, setClientSecret] = useState("");

  const handlePaymentIntent = () => {
    postApi("/create-payment-intent", {propertyInfo})
      .then((res) => setClientSecret(res.data.clientSecret))
      .catch((error) => console.error(error.response.data.error));
  };

  useEffect(() => { 
    if (isOpen) {  
      handlePaymentIntent();
    }
  }, [isOpen]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <Modal open={isOpen} onClose={onClose} className="reservation-modal">
      <Paper>
        <div className="modal-content">
          <div>
            <Box
              mb={2}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="h5" component="div" fontWeight={"bold"}>
                Checkout
              </Typography>
              <IconButton
                edge="end"
                color="inherit"
                onClick={onClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </div>
          {clientSecret && (
            <Elements stripe={stripePromise} options={options}>
              <CheckoutForm closeModal={onClose} propertyInfo={propertyInfo} clientSecret={clientSecret} />
            </Elements>
          )}
        </div>
      </Paper>
    </Modal>
  );
};

export default ReservationModal;
