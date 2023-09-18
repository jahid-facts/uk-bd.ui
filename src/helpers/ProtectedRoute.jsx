// import React from "react";
// import { Route, Navigate } from "react-router-dom";
// import { isAuthenticated, isEmailVerified } from "./AuthCheck";

// const ProtectedRoute = ({ children, ...rest }) => (
//   <Route
//     {...rest}
//     element={
//       isAuthenticated ? (
//         isEmailVerified ? (
//           children
//         ) : (
//           <Navigate to="/otp-verify" replace={true} />
//         )
//       ) : (
//         <Navigate to="/login" replace={true} />
//       )
//     }
//   />
// );

// export default ProtectedRoute;

import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);
  const isEmailVerified = useSelector((state) => state.auth.isEmailVerified);

  if (isAuthenticated) {
    if (isEmailVerified) {
      return children;
    } else {
      return <Navigate to="/otp-verify" replace={true} />;
    }
  } else {
    return <Navigate to="/login" replace={true} />;
  }
};

export default ProtectedRoute;
