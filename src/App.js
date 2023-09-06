import React from "react";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux"; // Import the Provider
import { theme } from "./theme";
import { PageNotFound } from "./pages/404";
import { AppLayout } from "./layouts/appLayout";
import { AdminLayout } from "./layouts/adminLayout";
import RegisterScreen from "./pages/auth/Register";
import store from "./redux/store";
import LoginScreen from "./pages/auth/Login";
import AuthProtected from "./helpers/AuthProtected";
import OtpScreen from "./pages/OTP";
import "react-toastify/dist/ReactToastify.css";
import OtpCheck from "./helpers/OtpCheck";
import { ToastContainer } from "react-toastify";
import Hosting from "./pages/hosting";
import PropertyList from "./pages/propertyList";


export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes> 
            <Route element={<AuthProtected />}>
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
            </Route>
            <Route element={<OtpCheck />}>
              <Route path="/otp-verify" element={<OtpScreen />} /> 
            </Route>
              <Route path="/admin" element={<AdminLayout />} /> 
              <Route path="/*" element={<AppLayout />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/hosting" element={<Hosting />} />
              <Route path="/property/list" element={<PropertyList />} />
              
          </Routes>
        </BrowserRouter>
          <ToastContainer position="top-right" autoClose={3000} />
      </ThemeProvider>
    </Provider>
  );
}
