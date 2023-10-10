import React from 'react';
import Typography from '@mui/material/Typography';
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { AppLayout } from "../../layouts/appLayout";

const Cancel = () => {
  return (
    <AppLayout>
      <div style={{ textAlign: "center", paddingTop: "100px" }}>
        <CancelIcon sx={{ fontSize: 100, color: "red" }} />
        <Typography variant="h4" gutterBottom>
          Payment Canceled
        </Typography>
        <Typography variant="body1">
          Your payment has been canceled. If you have any questions, please
          contact our support team.
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

export default Cancel;
