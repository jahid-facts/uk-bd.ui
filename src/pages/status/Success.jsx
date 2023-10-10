import React from "react";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { AppLayout } from "../../layouts/appLayout";

const Success = () => {
  return (
    <AppLayout>
      <div style={{ textAlign: "center", paddingTop: "100px" }}>
        <CheckCircleOutlineIcon sx={{ fontSize: 100, color: "green" }} />
        <Typography variant="h4" gutterBottom>
          Payment Successful
        </Typography>
        <Typography variant="body1">
          Thank you for your purchase. Your payment was successful.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link} // Use the Link component here
          to="/" // Replace with the path to your home page
          style={{ marginTop: "20px" }}
        >
          Back to Home
        </Button>
      </div>
    </AppLayout>
  );
};

export default Success;
