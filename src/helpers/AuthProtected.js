// AuthCheck.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const AuthProtected = ({ children }) => {
  const isAuthenticatedRedux = useSelector((state) => state.auth.isLoggedIn);
  const isAuthenticatedLocalStorage = !!localStorage.getItem('authToken'); // Check local storage

  if (isAuthenticatedRedux || isAuthenticatedLocalStorage) {
    return <Navigate to="/" />;
  }else{
    return <Outlet />;
  }

};

export default AuthProtected;
