import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
  TextField,
//   Alert,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as Yup from "yup";

import assets from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/authAction";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const initialValues = {
    email: "",
    password: "",
  };

  const userSchema = Yup.object({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Password must have at least 5 characters"),
  });

  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: userSchema,

    onSubmit: async (values, action) => {
      try {
        setSubmitting(true); // Set submitting to true
    
        // Dispatch the login action
        await dispatch(loginUser({ email: values.email, password: values.password }));
    
        // Reset form and navigate on success
        action.resetForm(); 
        setSubmitting(false); 
        navigate("/");
        toast.success('Logged in successfully');
      } catch (error) {
        setSubmitting(false); 
        toast.error('Email or password invalid'); 
      }
    },
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  if (isAuthenticated) {
    navigate("/");
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box p={4}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="100%"
            >
              <Box p={2}>
                <img
                  src={assets.images.logo}
                  alt="Airbnb Logo"
                  style={{
                    height: "80px",
                    cursor: "pointer",
                    border: "1px solid #f3f3f3",
                  }}
                />
                <Box p={2}></Box>
                <p>Explore the ideas throughtout the world</p>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              boxShadow={"0px 0px 18px 0px #6363633b"}
              p={4}
              textAlign={"center"}
              xs={{
                width: "100%",
              }}
              borderRadius={"20px"}
            >
              <h1>Sign In</h1>
              {/* {loginError && (
                <Alert
                  severity="error"
                  sx={{ mt: 1 }}
                  style={{ marginTop: "10px" }}
                >
                  {loginError}
                </Alert>
              )} */}
              <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Box pt={5}>
                  <TextField
                    type="email"
                    label="Email"
                    fullWidth
                    name="email"
                    error={errors.email && touched.email ? errors : null}
                    autoComplete="current-email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (
                    <p
                      style={{
                        color: "#d32f2f",
                        textAlign: "left",
                        margin: 0,
                        fontSize: "13px",
                        paddingTop: "10px",
                      }}
                    >
                      {errors.email}
                    </p>
                  ) : null}
                </Box>
                <Box pt={3}>
                  <FormControl sx={{ width: "100%" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      error={!!errors.password && touched.password} // Set error prop based on error condition
                      name="password"
                      autoComplete="current-password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                  {errors.password && touched.password && (
                    <p
                      style={{
                        color: "#d32f2f",
                        textAlign: "left",
                        margin: 0,
                        fontSize: "13px",
                        paddingTop: "10px",
                      }}
                    >
                      {errors.password}
                    </p>
                  )}
                </Box>
                <Box
                  pt={4}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Link to="/register">
                    <Typography variant="body2">Sign Up</Typography>
                  </Link>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="contained"
                    color="primary"
                  >
                    Login
                  </Button>
                </Box>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <ToastContainer position="top-right" autoClose={3000} />
    </Box>
  );
};

export default LoginScreen;
