import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";

// Utility function to check if the user is authenticated
export const useIsAuthenticated = () => {
  const isLoggedInRedux = useSelector((state) => state.auth.isLoggedIn);
  const authToken = localStorage.getItem("authToken");
  const isLoggedInLocalStorage = !!authToken;

  return isLoggedInRedux || isLoggedInLocalStorage;
};

export const useIsEmailVerified = () => {
  const isEmailVerifiedRedux = useSelector(
    (state) => state.auth.isEmailVerified
  );
  const isEmailVerified = localStorage.getItem("isEmailVerified");
  const isEmailVerifiedStorage = !!isEmailVerified;

  return isEmailVerifiedRedux || isEmailVerifiedStorage;
};

// auth info export const useAuthInfo = () => {
export const useAuthInfo = () => {
  const authUserInfo = localStorage.getItem("user");
  const user = authUserInfo ? JSON.parse(authUserInfo) : null;

  // Ensure that user is not null before accessing the token
  const token = user ? user.token : null;

  // Check if token is not null before decoding it
  const decodedToken = token ? jwtDecode(token) : null;

  // Ensure that decodedToken is not null before accessing userInfo
  const userInfo = decodedToken ? decodedToken.userInfo : null;

  return userInfo;
};
