import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import { PageNotFound } from "../pages/404";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import ReservationDetails from "../pages/reservationDetails/ReservationDetails";
import BottomBar from "../components/bottom_bar/BottomBar";
import AddPropertise from "../pages/addPropertise";
import AuthCheck from "../helpers/AuthCheck";
import AuthCheckComponent from "../helpers/AuthCheckComponent";
import PaymentForm from "../pages/payments";

export const AppLayout = () => {
  const location = useLocation();

  let heightTop;
  if (location.pathname === "/") {
    heightTop = "215px";
  } else {
    heightTop = "110px";
  }

  return (
    <>
      {/* <AuthCheckComponent> */}
      <Navbar />
      {/* </AuthCheckComponent> */}
      <Box marginTop={heightTop}></Box>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route element={<AuthCheck />}>
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/reservation-details"
              element={<ReservationDetails />}
            />
            <Route
              path="/payments"
              element={<PaymentForm />}
            />
            <Route path="/add-propertise" element={<AddPropertise />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Box marginTop={heightTop}>
        <BottomBar />
      </Box>
      {/* <Footer /> */}
    </>
  );
};
