import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import { PageNotFound } from "../pages/404";
import ReservationDetails from "../pages/reservationDetails/ReservationDetails";
import AddProperties from "../pages/addProperties";
import PaymentForm from "../pages/payments";
import { useSelector } from "react-redux";
import ProtectedRoute from "../helpers/ProtectedRoute";
import Hosting from "../pages/hosting";
import PropertyList from "../pages/propertyList";
import EditProperty from "../pages/editProperty";
import ProfilePage from "../pages/profile/ProfilePage";

export const AppRoutes = () => {
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);
  const isEmailVerified = useSelector((state) => state.auth.isEmailVerified);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              isEmailVerified ? (
                <Home />
              ) : (
                <Navigate to="/otp-verify" replace />
              )
            ) : (
              <Home />
            )
          }
        />
        <Route
          path="/hosting"
          element={<ProtectedRoute children={<Hosting />} />}
        />
        <Route
          path="/property/list"
          element={<ProtectedRoute children={<PropertyList />} />}
        />
        <Route path="/edit/property/:propertyId" element={<EditProperty />} />
        <Route
          path="/profile"
          element={<ProtectedRoute children={<ProfilePage />} />}
        />
        <Route
          path="/reservation-details/:propertyId"
          element={<ProtectedRoute children={<ReservationDetails />} />}
        />
        <Route
          path="/payments"
          element={<ProtectedRoute children={<PaymentForm />} />}
        />
        <Route
          path="/add-properties"
          element={<ProtectedRoute children={<AddProperties />} />}
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
