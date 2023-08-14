import { getApi, postApi } from "../../config/configAxios"; 
import { removeCookie, setCookie } from "../../utils/cookie";
import { loginFailure, loginStart, loginSuccess, logout } from "../reducer/userSlice";

// Action to handle user authentication
export const getAuthAction = ({ credentials }) => async (dispatch) => {
    try {
        dispatch(loginStart());
        const response = await postApi('/login', credentials);
        console.log(response);
        if (response.success === true) {
            // Set a cookie for 7 days when the user logs in
            setCookie('accessToken', response.token, 7);
            dispatch(loginSuccess(response));
        } else {
            dispatch(loginFailure(response));
        }
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};

// Action to handle user logout
export const logoutAction = () => async (dispatch) => {
    try {
        const response = await postApi('/logout');
        if (response.success === true) {
            // Remove cookie
            removeCookie('accessToken');
            dispatch(logout());
        } else {
            dispatch(loginFailure(response.message));
        }
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};

// Action to get authenticated user data
export const getUserAction = () => async (dispatch) => {
    try {
        const response = await getApi('/user');
        if (response.success === true) {
            dispatch(loginSuccess(response.data));
        } else {
            dispatch(loginFailure(response.message));
        }
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};

// Action to register a new user
export const registerAction = ({ credentials }) => async (dispatch) => {
    try {
        const response = await postApi('/register', credentials);
        if (response.success === 201) {
            // Set cookie
            setCookie('accessToken', response.data.token, 7);
            dispatch(loginSuccess(response.data));
        } else {
            dispatch(loginFailure(response.message)); // Handle unsuccessful registration
        }
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};
