import { getApi, postApi } from '../../config/configAxios';
import { removeCookie, setCookie } from '../../utils/cookie';
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logout,
} from '../reducer/userSlice';

// Authenticate user
export const getAuthAction = ({ credentials }) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const response = await postApi('/login', credentials);
    if (response.success === true) {
      // Set a cookie for 7 days when the user logs in
      setCookie('accessToken', response.data.token, 7);
      dispatch(loginSuccess(response.data));
      return response.data; // Return user data for use in the thunk
    } else {
      dispatch(loginFailure(response.message));
      throw new Error(response.message);
    }
  } catch (error) {
    dispatch(loginFailure(error.message));
    throw error;
  }
};

// Log out user
export const logoutAction = () => async (dispatch) => {
  try {
    const response = await postApi('/logout');
    if (response.success === true) {
      // Remove cookie
      removeCookie('accessToken');
      dispatch(logout());
    } else {
      dispatch(loginFailure(response.message));
      throw new Error(response.message);
    }
  } catch (error) {
    dispatch(loginFailure(error.message));
    throw error;
  }
};

// Get authenticated user data
export const getUserAction = () => async (dispatch) => {
  try {
    const response = await getApi('/user');
    if (response.success === true) {
      dispatch(loginSuccess(response.data));
      return response.data; // Return user data for use in the thunk
    } else {
      dispatch(loginFailure(response.message));
      throw new Error(response.message);
    }
  } catch (error) {
    dispatch(loginFailure(error.message));
    throw error;
  }
};

// Register a new user
export const registerAction = ({ credentials }) => async (dispatch) => {
  try {
    const response = await postApi('/register', credentials);
    if (response.success === 201) {
      // Set cookie
      setCookie('accessToken', response.data.token, 7);
      dispatch(loginSuccess(response.data));
      return response.data; // Return user data for use in the thunk
    } else {
      dispatch(loginFailure(response.message));
      throw new Error(response.message);
    }
  } catch (error) {
    dispatch(loginFailure(error.message));
    throw error;
  }
};
