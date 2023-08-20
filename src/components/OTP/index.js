import React, { useState, useRef } from "react";
import "./otp.css";
import { Box, Button, Grid } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";

export const OtpComponent = () => {
  const inputRefs = useRef([]);
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const userEmail = useSelector((state) => state.auth.user);

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

  const handleInputChange = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    if (value !== "" && index < 5) {
      focusNext(index);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otpValues[index] === "" && index > 0) {
        focusPrev(index);
      } else {
        const newOtpValues = [...otpValues];
        newOtpValues[index] = "";
        setOtpValues(newOtpValues);
      }
    }
  };

  const handleApiCall = async () => {
    const concatenatedOTP = otpValues.join("");

    try {
      const data = {
        otp: concatenatedOTP,
        email: userEmail,
      };
      const response = await axios
        .post(`${process.env.REACT_APP_BASE_URL}/verify-otp`, data)
        .then((response) => {
          console.log("API Response:", response.data);
        })
        .catch((error) => {
          console.error("API Error:", error);
        });

      console.log("API Response:", response.data);
      // Perform any further actions based on the response here
    } catch (error) {
      console.error("API Error:", error.AxiosError.name.response.data);
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
              <Box
                p={5}
                boxShadow={"0px 0px 18px 0px #6363633b"}
                borderRadius={"20px"}
              >
                <Box p={3} textAlign={"center"}>
                  <h1>OTP Varyfication</h1>
                  <p className="eamilSend">
                    An OTP has been sent to {userEmail}
                  </p>
                </Box>
                <h5>Please enter your OTP to verify</h5>
                <div className="otp-field">
                  {[0, 1, 2, 3, 4, 5].map((index) => (
                    <input
                      key={index}
                      value={otpValues[index]}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      type="text"
                      maxLength="1"
                      ref={(ref) => (inputRefs.current[index] = ref)}
                    />
                  ))}
                </div>
                <Box pt={3} display={"flex"} justifyContent={"center"}>
                  <Button
                    variant="contained"
                    color={"secondary"}
                    sx={{ textTransform: "capitalize", fontWeight: "700" }}
                  >
                    Resend OTP
                  </Button>
                  <Box p={1}></Box>
                  <Button
                    variant="contained"
                    color={"primary"}
                    onClick={handleApiCall}
                    sx={{ textTransform: "capitalize", fontWeight: "700" }}
                  >
                    Verify
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
