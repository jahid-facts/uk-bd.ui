import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const AuthCheck = ({ children }) => {
  const isAuthenticatedRedux = useSelector((state) => state.auth.isLoggedIn);
  const isEmailVerifiedRedux = useSelector((state) => state.auth.isEmailVerified);
  const isEmailVerifiedLocalStorage = localStorage.getItem("isEmailVerified");
  const isAuthenticatedLocalStorage = localStorage.getItem('authToken');
  
  const isEmailVerified = isEmailVerifiedRedux || isEmailVerifiedLocalStorage;


  if (!isEmailVerified) {
    return <Navigate to="/otp-verify" />;
  }
  if (isAuthenticatedRedux || isAuthenticatedLocalStorage) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default AuthCheck;
