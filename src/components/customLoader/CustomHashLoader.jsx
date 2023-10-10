import { Box } from "@mui/material";
import React from "react";
import { HashLoader } from "react-spinners";

const CustomHashLoader = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="60vh"
      width={"100%"}
    >
      <HashLoader color="#ff0000" size={'40px'} />
    </Box>
  );
};

export default CustomHashLoader;
