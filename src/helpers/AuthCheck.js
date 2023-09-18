// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Navigate, Outlet } from 'react-router-dom';

// const AuthCheck = ({ children }) => {
//   const isAuthenticatedRedux = useSelector((state) => state.auth.isLoggedIn);
//   const isEmailVerifiedRedux = useSelector((state) => state.auth.isEmailVerified);
//   const isEmailVerifiedLocalStorage = localStorage.getItem("isEmailVerified");
//   const isAuthenticatedLocalStorage = localStorage.getItem('authToken');
  
//   const isEmailVerified = isEmailVerifiedRedux || isEmailVerifiedLocalStorage;


//   if (!isEmailVerified) {
//     return <Navigate to="/otp-verify" />;
//   }
//   if (isAuthenticatedRedux || isAuthenticatedLocalStorage) {
//     return <Outlet />;
//   } else {
//     return <Navigate to="/login" />;
//   }
// };

// export default AuthCheck;

// auth.js

// Function to log in and set authentication status
export const isEmailVerified = () => {
  const storedValue = localStorage.getItem('isEmailVerified');
  
  // Check if storedValue is null or undefined
  if (storedValue === null || typeof storedValue === 'undefined') {
    return false; // Return a default value (e.g., false) when not found
  }
  
  // Compare the stored value as a string with 'true'
  return storedValue === 'true';
};


export const isAuthenticated = () => {
  const storedValue = localStorage.getItem('isLoggedIn');
  
  // Check if storedValue is null or undefined
  if (storedValue === null || typeof storedValue === 'undefined') {
    return false; // Return a default value (e.g., false) when not found
  }
  
  // Compare the stored value as a string with 'true'
  return storedValue === 'true';
};
