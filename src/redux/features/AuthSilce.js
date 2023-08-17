// authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postApi } from "../../config/configAxios";

// Define the async thunk for user registration
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData) => {
    const response = await postApi("/register", userData);
    const data = response.data;
    if (!response.ok) {
      throw new Error(data.message || "Registration failed");
    }
    return data;
  }
);

// Define the async thunk for user login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (loginData) => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/login`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
    });
    // const response = await postApi("/login", loginData); 
    if (!response.ok) {
        throw new Error(response.statusText);
      }
    return response.data;
  }
);

const initialState = {
  user: null,
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true" || false,
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser(state) {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem("user");
      localStorage.removeItem("authToken");
      localStorage.removeItem("isLoggedIn");
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
        state.isLoggedIn = true;
        localStorage.setItem("user", JSON.stringify(action.payload));
        localStorage.setItem("isLoggedIn", "true");
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
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
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
