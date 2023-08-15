import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAuthAction, logoutAction, getUserAction, registerAction } from '../actions/userAction'; // Import your action creators

const initialState = {
  user: {},
  isLoading: false,
  isAuth: false,
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuth = true;
      state.error = '';
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = {};
      state.isLoading = false;
      state.isAuth = false;
      state.error = '';
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;   
// Export the reducer from the userSlice
export default userSlice.reducer;


// Authenticate user
export const loginUser = createAsyncThunk('user/login', async (credentials, { dispatch }) => {
  try {
    dispatch(userSlice.actions.loginStart());
    const user = await dispatch(getAuthAction({ credentials })); // Call your action creator
    return user;
  } catch (error) {
    throw error;
  }
});

// Log out user
export const logoutUser = createAsyncThunk('user/logout', async (_, { dispatch }) => {
  try {
    await dispatch(logoutAction()); // Call your action creator
  } catch (error) {
    throw error;
  }
});

// Get authenticated user data
export const fetchUserData = createAsyncThunk('user/fetchUserData', async (_, { dispatch }) => {
  try {
    const user = await dispatch(getUserAction()); // Call your action creator
    return user;
  } catch (error) {
    throw error;
  }
});

// Register a new user
export const registerUser = createAsyncThunk('user/register', async (credentials, { dispatch }) => {
  try {
    const user = await dispatch(registerAction({ credentials })); // Call your action creator
    return user;
  } catch (error) {
    throw error;
  }
});
