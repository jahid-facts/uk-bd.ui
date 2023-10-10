import axios from "axios";
import { useSelector } from "react-redux";
import { postApi } from "../../config/configAxios";
import { Button } from "@mui/material";

const PayButton = () => {
  const user = useSelector((state) => state.auth);
  const cartItems = [
    {
      name: "card",
      price: 454,
      quantity: 1,
    },
    {
      name: "Phone",
      price: 233,
      quantity: 2,
    },
    {
      name: "Watch",
      price: 34,
      quantity: 4,
    },
  ];
  const handleCheckout = () => {
    postApi('/create-checkout-session', {
      cartItems,
      userId: user._id,
    })
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <Button
        variant="contained"
        fullWidth
        color="secondary"
        size="large"
        sx={{ fontWeight: "600", cursor: "pointer" }}
        onClick={() => handleCheckout()}
      >
        Reserve
      </Button>
      {/* <button onClick={() => handleCheckout()}>Check out</button> */}
    </>
  );
};

export default PayButton;
