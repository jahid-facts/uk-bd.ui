// Authenticated.js
import { useSelector } from 'react-redux';

// Utility function to check if the user is authenticated
export const useIsAuthenticated = () => {
  const isLoggedInRedux = useSelector(state => state.auth.isLoggedIn);
  // const isEmailVerifiedRedux = useSelector((state) => state.auth.isEmailVerified);
  const authToken = localStorage.getItem('authToken');
  const isLoggedInLocalStorage = !!authToken;
  
  return isLoggedInRedux || isLoggedInLocalStorage; 

};
