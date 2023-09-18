import React, { useState, useRef, useEffect } from "react";
import "./otp.css";
import { Box, Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearMessage, verifyOTP } from "../../redux/features/AuthSlice";
import jwtDecode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postApi } from "../../config/configAxios";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const OtpComponent = () => {
  const navigate = useNavigate();
  const { error, success, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const inputRefs = useRef([]);
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);

  // const user = userString ? JSON.parse(userString) : null;

  const token = user.token;
  const decodedToken = token ? jwtDecode(token) : null;
  const userEmail = decodedToken.userInfo?.email || '';

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

  // verify otp
  const handleApiCall = async () => {
    try {
      const concatenatedOTP = otpValues.join("");
      const data = {
        otp: concatenatedOTP,
        email: userEmail,
      };
      setDisableButton(true);
      const response = await dispatch(verifyOTP(data));
      if (response.payload.status) {
        navigate("/");
      }
      setDisableButton(false);
    } catch {
      setDisableButton(false);
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearMessage());
    }
    if (success) {
      toast.success(success);
      dispatch(clearMessage());
    }
  }, [error, success, dispatch]);

  // resend otp
  const [disableButton, setDisableButton] = useState(false);
  const handleResendOTP = async () => {
    try {
      setDisableButton(true);
      // Call axios with the resend OTP API
      await postApi("/resend-otp", { email: userEmail });

      // You can display a success toast message here if needed
      toast.success("OTP has been resent successfully");
      setDisableButton(false);
    } catch (error) {
      // Handle the error here
      console.error("Error while resending OTP:", error);

      setDisableButton(false);
      // Display an error toast message
      toast.error("Failed to resend OTP. Please try again.");
    }
  };

  // time calculate
  const [oldTime, setOldTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isTimeOver, setIsTimeOver] = useState(false);
  const userId = decodedToken.userInfo._id;

  useEffect(() => {
    // Fetch the oldTime value from the database using the user ID as a parameter
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/user/${userId}`)
      .then((response) => {
        setOldTime(new Date(response.data.user.otpExpiration));
      })
      .catch((error) => {
        console.error("Error fetching oldTime:", error);
      });
  }, [userId, disableButton]);

  useEffect(() => {
    if (oldTime) {
      const interval = setInterval(() => {
        const newTime = new Date();
        const diff = oldTime - newTime;

        if (diff <= 0) {
          clearInterval(interval);
          setTimeRemaining(0);
          setIsTimeOver(true);
        } else {
          setCurrentTime(newTime);
          setTimeRemaining(diff);
          setIsTimeOver(false);
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [oldTime]);

  const formatTimeRemaining = (timeDiff) => {
    const totalSeconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100%"
      >
        <Box p={4}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Box
                p={5}
                boxShadow={"0px 0px 18px 0px #6363633b"}
                borderRadius={"20px"}
              >
                <Box p={3} textAlign={"center"}>
                  <h2>OTP Verification</h2>
                  <p className="eamilSend">
                    An OTP has been sent to {userEmail}
                  </p>
                </Box>
                <Box>
                  <h5>Please enter your OTP to verify</h5>
                  {isTimeOver ? (
                    <h6>Time is over</h6>
                  ) : (
                    <h6>
                      Time Remaining: {formatTimeRemaining(timeRemaining)}
                    </h6>
                  )}
                </Box>

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
                <Box pt={3} display={"flex"}>
                  <Button
                    onClick={handleResendOTP}
                    disabled={disableButton}
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
                    disabled={disableButton}
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
        <ToastContainer position="top-right" autoClose={3000} />
      </Box>
    </>
  );
};
