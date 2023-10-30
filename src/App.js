import React from "react";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { theme } from "./theme";
import { PageNotFound } from "./pages/404";
import RegisterScreen from "./pages/auth/Register";
import LoginScreen from "./pages/auth/Login";
import OtpScreen from "./pages/OTP";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./routes/AppRoutes";
import { AdminRoutes } from "./routes/AdminRoutes";
import AdminCheck from "./helpers/userRoles";
import Success from "./pages/paymentStatus/Success";
import Cancel from "./pages/paymentStatus/Cancel";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Students from "./pages/students/Students";
import { Edit } from "./pages/students/Edit";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export default function App() {
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);
  const isEmailVerified = useSelector((state) => state.auth.isEmailVerified);
  const isAdmin = AdminCheck();

  return (
    <ThemeProvider theme={theme}>
      <Elements stripe={stripePromise}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              isAuthenticated ? <Navigate to="/" replace /> : <LoginScreen />
            }
          />

          <Route
            path="/register"
            element={
              isAuthenticated ? <Navigate to="/" replace /> : <RegisterScreen />
            }
          />
          <Route
            path="/otp-verify"
            element={
              isAuthenticated ? (
                isEmailVerified ? (
                  <Navigate to="/" replace />
                ) : (
                  <OtpScreen />
                )
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* app all routes  */}
          <Route path="/*" element={<AppRoutes />} /> 

          {/* admin all routes {isAdmin && */}
          {/* {isAdmin && <Route path="/admin/*" element={<AdminRoutes />} />} */}
          <Route path="/admin/*" element={<AdminRoutes />} />

          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} /> 

          <Route path="/students" element={<Students />} /> 
          <Route path="/edit/:id" element={<Edit />} /> 

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
      </Elements>
    </ThemeProvider>
  );
}
