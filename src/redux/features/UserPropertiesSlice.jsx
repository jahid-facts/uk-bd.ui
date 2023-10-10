import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApiById } from "../../config/configAxios";

// Async action to get user properties
export const getUserProperties = createAsyncThunk(
  "property/getUserProperties",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await getApiById(`/user/properties/${userId}`, userId);
      return response.data.properties;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

const initialState = {
  properties: [],
  status: "idle",
  error: null,
};

const userPropertySlice = createSlice({
  name: "userProperties",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserProperties.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getUserProperties.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.properties = action.payload;
      })
      .addCase(getUserProperties.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default userPropertySlice.reducer;
