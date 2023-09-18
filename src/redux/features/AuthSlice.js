import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import { postApi } from "../../config/configAxios";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await postApi("/register", userData);
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (loginData, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await postApi("/login", loginData);
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const verifyOTP = createAsyncThunk(
  "auth/verifyOTP",
  async (otpData, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await postApi("/verify-otp", otpData);
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true" || false,
  isEmailVerified: localStorage.getItem("isEmailVerified") === "true" || false,
  status: "idle",
  error: null,
  success: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState, 
  reducers: {
    logoutUser(state) {
      state.status = "idle";
      state.user = null;
      state.isLoggedIn = false;
      state.isEmailVerified = false;
      state.error = null;
      state.success = null;
      localStorage.removeItem("user");
      localStorage.removeItem("authToken");
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("isEmailVerified");
    },
    clearMessage(state) {
      state.error = null;
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.isLoggedIn = false;
        state.success = action.payload.message;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.error;
        state.success = null;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.isLoggedIn = true;
        localStorage.setItem("user", JSON.stringify(action.payload));
        localStorage.setItem("isLoggedIn", "true");
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.error;
        state.success = null;
      })
      .addCase(verifyOTP.pending, (state) => {
        state.status = "loading";
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isEmailVerified = true;
        state.success = action.payload.message;
        localStorage.setItem("isEmailVerified", "true");
        state.error = null;
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.error;
        state.success = null;
      });
  },
});

export const { logoutUser,clearMessage } = authSlice.actions;

export default authSlice.reducer;
