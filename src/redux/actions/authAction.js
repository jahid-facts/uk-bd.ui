import { postApi } from '../../config/configAxios';
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
} from '../reducer/authSlice';

export const loginUser = (credentials) => async (dispatch) => {
  try {
    dispatch(loginStart());

    const response = await postApi('/api/login', credentials);

    // Assuming the API returns a success flag and user data
    if (response.data.success) {
      // Save token to local storage
      localStorage.setItem('authToken', response.data.token);
      dispatch(loginSuccess(response.data)); 
    } else {
      dispatch(loginFailure(response.data));
    }
  } catch (error) {
    dispatch('Email or password invalid');
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
 
    // Remove the authToken from local storage
    localStorage.removeItem('authToken');

    // Dispatch the logout action
    dispatch(logout());
  } catch (error) {
    console.error('Logout failed', error);
  }
};


// register user
export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch(loginStart());

    const response = await postApi('/api/register', userData);

    // Assuming the API returns a success flag and user data
    if (response.data.success) {
      // Save token to local storage
      localStorage.setItem('authToken', response.data.token);
      dispatch(loginSuccess(response.data)); // Assuming response.data contains user data
    } else {
      dispatch(loginFailure(response.data.message)); // Use response.data.message
    }
  } catch (error) {
    dispatch(loginFailure('Registration failed'));
  }
};