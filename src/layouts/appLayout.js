import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import { PageNotFound } from "../pages/404";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { AdminLayout } from "./adminLayout";
import ReservationDetails from "../pages/reservationDetails/ReservationDetails";
import BottomBar from "../components/bottom_bar/BottomBar";

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
      <Navbar />
      <Box marginTop={heightTop}></Box>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reservation-details" element={<ReservationDetails />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes> 
      
      <BottomBar />
      <Footer />
      <Routes>
        <Route>
          <Route path="/admin/*" element={<AdminLayout />} />
        </Route>
      </Routes>
    </>
  );
};
