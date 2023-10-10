import React, { useState, useEffect } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button, TextField, Grid } from "@mui/material";

const PaymentElement = ({ onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load Stripe.js asynchronously when the component mounts.
    const loadStripe = async () => {
      if (!stripe || !elements) {
        return;
      }
      setLoading(false);
    };

    loadStripe();
  }, [stripe, elements]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    console.log(result);

    if (result?.error) {
      setError(result.error.message);
    } else {
      onSuccess(result.paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {loading ? (
        <div>Loading Stripe...</div>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CardNumberElement
              options={{ style: { base: { fontSize: "16px" } } }}
            />
          </Grid>
          <Grid item xs={6}>
            <CardExpiryElement
              options={{ style: { base: { fontSize: "16px" } } }}
            />
          </Grid>
          <Grid item xs={6}>
            <CardCvcElement
              options={{ style: { base: { fontSize: "16px" } } }}
            />
          </Grid>
        </Grid>
      )}
      {error && <div className="text-danger">{error}</div>}
      <Button type="submit" variant="contained" color="primary">
        Pay
      </Button>
    </form>
  );
};

export default PaymentElement;

// import React, { useState, useEffect } from "react";
// import {
//   CardNumberElement,
//   CardExpiryElement,
//   CardCvcElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import { Button, TextField, Grid, CircularProgress } from "@mui/material";

// const PaymentElement = ({ onSuccess }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Load Stripe.js asynchronously when the component mounts.
//     const loadStripeAsync = async () => {
//       if (!stripe || !elements) {
//         return;
//       }
//       setLoading(false);
//     };

//     loadStripeAsync();
//   }, [stripe, elements]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     // Clear previous errors
//     setError(null);

//     const result = await stripe.createPaymentMethod({
//       type: "card",
//       card: elements.getElement(CardNumberElement),
//     });

//     if (result?.error) {
//       setError(result.error.message);
//     } else {
//       // Handle success by calling the onSuccess callback
//       onSuccess(result.paymentMethod);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {loading ? (
//         <div>Loading Stripe...</div>
//       ) : (
//         <Grid container spacing={2}>
//           <Grid item xs={6}>
//             <CardNumberElement
//               options={{ style: { base: { fontSize: "16px" } } }}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <CardExpiryElement
//               options={{ style: { base: { fontSize: "16px" } } }}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <CardCvcElement
//               options={{ style: { base: { fontSize: "16px" } } }}
//             />
//           </Grid>
//         </Grid>
//       )}
//       {error && <div className="text-danger">{error}</div>}

//       <>
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           disabled={loading}
//           style={{ marginTop: "10px" }}
//         >
//           {loading && <CircularProgress style={{ fontSize: "10px" }} />} Pay
//         </Button>
//       </>
//     </form>
//   );
// };

// export default PaymentElement;
