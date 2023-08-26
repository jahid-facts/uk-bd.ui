// AuthCheck.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const AuthCheckComponent = ({ children }) => {
  const isAuthenticatedRedux = useSelector((state) => state.auth.isLoggedIn);
  const isAuthenticatedLocalStorage = !!localStorage.getItem('authToken'); // Check local storage

  if (isAuthenticatedRedux || isAuthenticatedLocalStorage) {
    return children;
  }else{
    return <Navigate to="/login" />;
  }

  
};

export default AuthCheckComponent;
