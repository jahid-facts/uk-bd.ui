import { Box } from "@mui/material";
import React from "react";
import assets from "../../assets";

export const NoRecord = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="60vh"
      width={"100%"}
    >
      <img src={assets.images.noRecord} height="200px" alt="no record found" />
    </Box>
  );
};
