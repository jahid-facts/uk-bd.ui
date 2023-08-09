import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import Counter from "./Counter";

const WhoComponent = ({ label, description, count, setCount }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
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
          <Typography
            sx={{ color: "primary.main" }}
            variant="h6"
            fontSize={"12px"}
            fontWeight={"400"}
          >
            {description}
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

export default WhoComponent;