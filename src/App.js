import React from 'react'; 
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'; // Import the Provider
import { theme } from "./theme";
import { PageNotFound } from "./pages/404";
import { AppLayout } from "./layouts/appLayout";
import { AdminLayout } from "./layouts/adminLayout";
import LoginScreen from "./pages/auth/login";
import RegisterScreen from "./pages/auth/register";
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>  
      <ThemeProvider theme={theme}> 
        <BrowserRouter>
          <Routes>
            <Route path="/admin" element={<AdminLayout />} />
            <Route path="/*" element={<AppLayout />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} /> 
          </Routes>
        </BrowserRouter>
      </ThemeProvider> 
    </Provider>
  );
}
