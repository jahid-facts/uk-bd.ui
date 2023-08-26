// AuthCheck.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const OtpCheck = ({ children }) => {
  const isEmailVerifiedRedux = localStorage.getItem("isEmailVerified");

  if (isEmailVerifiedRedux){
    return <Navigate to="/" />;
  }else{
    return <Outlet />;
  }

  
};

export default OtpCheck;
