import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import Counter from "../searchFilter/Counter";

const AboutPlaceComponent = ({ label, count, setCount }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems:'center',
          px: "15px",
          py: "20px",
        }}
      >
        <Box sx={{ px: "15px" }}>
          <Typography
            sx={{ color: "primary.main" }}
            variant="h6"
            fontSize={"14px"}
            fontWeight={"600"}
          >
            {label}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "fit-content",
          }}
        >
          <Counter count={count} setCount={setCount} />
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default AboutPlaceComponent;