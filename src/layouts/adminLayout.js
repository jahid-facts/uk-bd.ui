import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminDashboard } from "../pages/admin/dashboard";
import { PageNotFound } from "../pages/404";

export const AdminLayout = () => {
  return (
    <>
      <Routes>
          {/* <Route path=""> */}
            <Route path="dashboard" element={<AdminDashboard />} />
          {/* </Route> */}
          
        <Route path="*" element={<PageNotFound />} /> 
      </Routes>
    </>
  );
};
