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

// auth info
export const useAuthInfo = () => {
  const authUserInfo = localStorage.getItem("user");
  const user = authUserInfo ? JSON.parse(authUserInfo) : null;
  const token = user.token;
  const decodedToken = jwtDecode(token);
  const userInfo = decodedToken.userInfo;

  return userInfo;
};
