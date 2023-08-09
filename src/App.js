import { ThemeProvider } from "@mui/material";
import React from "react";
import { theme } from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageNotFound } from "./pages/404";
import { AppLayout } from "./layouts/appLayout";
import { Dashboard } from "./pages/dashboard";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<AppLayout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
