import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import BottomBar from "../components/bottom_bar/BottomBar";

export const AppLayout = ({ children }) => {
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

      {children}

      <Box marginTop={heightTop}>
        <BottomBar />
      </Box>
    </>
  );
};
