// AuthCheck.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const AuthCheck = ({ children }) => {
  const isAuthenticatedRedux = useSelector((state) => state.auth.isAuthenticated);
  const isAuthenticatedLocalStorage = !!localStorage.getItem('authToken'); // Check local storage

  if (isAuthenticatedRedux || isAuthenticatedLocalStorage) {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
};

export default AuthCheck;
