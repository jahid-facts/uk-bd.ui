import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminDashboard } from "../pages/admin/dashboard";
import { PageNotFound } from "../pages/404";
import Properties from "../pages/admin/properties/Properties";
import HostUsers from "../pages/admin/users/HostUsers";
import RenterUsers from "../pages/admin/users/RenterUsers";

export const AdminRoutes = () => {
  return (
    <>
      <Routes>
          {/* <Route path=""> */}
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/renter/users" element={<RenterUsers />} />
            <Route path="/host/users" element={<HostUsers />} />
            <Route path="/properties" element={<Properties />} />
          {/* </Route> */}
          
        <Route path="*" element={<PageNotFound />} /> 
      </Routes>
    </>
  );
};
