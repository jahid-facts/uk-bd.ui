import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { AppLayout } from "../../layouts/appLayout";
import Swal from "sweetalert2";
import { useStripe } from "@stripe/react-stripe-js";
import { postApi } from "../../config/configAxios";
import Invoice from "../../components/invoice/Invoice";
import CustomHashLoader from "../../components/customLoader/CustomHashLoader";
import { Alert, Box } from "@mui/material";
import { formatDate } from "../../utils/dateUtils";

const Success = () => {
  const stripe = useStripe();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );
    if (!clientSecret) {
      setLoading(false); // Ensure to set the loading state to false
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          performSuccessAction(paymentIntent.id);
          if (data) {
            setLoading(false);
          }
          break;

        case "processing":
          Swal.fire(
            "Good job!",
            "Payment processing. We'll update you when payment is received.",
            "success"
          );
          setLoading(false); // Ensure to set the loading state to false
          break;

        case "requires_payment_method":
          Swal.fire(
            "Ooops!",
            "Payment failed. Please try another payment method.",
            "error"
          );
          setLoading(false); // Ensure to set the loading state to false
          break;

        default:
          Swal.fire("Ooops!", "Something went wrong.", "error");
          setLoading(false); // Ensure to set the loading state to false
          break;
      }
    });
  }, [stripe, data]);

  const performSuccessAction = async (paymentIntentId) => {
    setLoading(true);
    try {
      const response = await postApi("/payment-booking-propery", {
        paymentIntentId,
      });
      if (response.status === 200) {
        Swal.fire("Good job!", "Success! Payment received.", "success");
        setData(response.data.paymentIntent);
        return;
      }
      if (response.status === 201) {
        setData(response.data);
        if (data) {
          setLoading(false);
        }
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppLayout>
      {loading ? (
        <CustomHashLoader />
      ) : (
        <div style={{ textAlign: "center" }}>
          <CheckCircleOutlineIcon sx={{ fontSize: 80, color: "green" }} />
          <Typography variant="h5" gutterBottom fontWeight={600}>
            Payment Successful
          </Typography>
          <Typography variant="body1">
            Thank you for your purchase. Your payment was successful.
          </Typography>
          <Box width={'max-content'} margin={'10px auto'}>
            <Alert severity="info">
              Check your email ({data?.paymentIntent?.metadata?.renterEmail})
              for invoice.
            </Alert> 
          </Box>
          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "20px",
              width: "300px",
              margin: "20px auto",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography variant="body1" sx={{ marginBottom: "10px" }}>
              <b>Invoice no:</b> {data?.paymentIntent?.created}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "10px" }}>
              <b>Check in:</b>{" "}
              {formatDate(data?.paymentIntent?.metadata?.startDate)}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "10px" }}>
              <b>Check out:</b>{" "}
              {formatDate(data?.paymentIntent?.metadata?.endDate)}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "10px" }}>
              <b>Total:</b>{" "}
              {data?.paymentIntent?.metadata.actualPrice}
            </Typography>
          </Box>
          <Invoice Datastate={data?.paymentIntent} />
        </div>
      )}
    </AppLayout>
  );
};

export default Success;
