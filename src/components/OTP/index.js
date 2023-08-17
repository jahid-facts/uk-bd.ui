import { useState, useEffect, useRef } from "react";
import "./otp.css";
import { Box, Grid } from "@mui/material";

export const OtpComponent = () => {
  const inputRefs = useRef([]);

  const focusNext = (index) => {
    if (inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const focusPrev = (index) => {
    if (inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100%"
      >
        <Box p={4} sx={{}}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Box textAlign={"center"}>
                <Box p={2} textAlign={"center"}>
                  <Box p={2}></Box>
                  <h1>Verify </h1>
                  <p>Page not found</p>
                </Box>
                <div className="otp-field">
                  {[0, 1, 2, 3, 4, 5].map((index) => (
                    <input
                      key={index}
                      onChange={() => focusNext(index)}
                      onKeyDown={(e) => {
                        if (e.key === "Backspace") {
                          focusPrev(index);
                        }
                      }}
                      type="text"
                      maxLength="1"
                      ref={(ref) => (inputRefs.current[index] = ref)}
                    />
                  ))}
                </div>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
