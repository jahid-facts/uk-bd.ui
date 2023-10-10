import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi } from "../../config/configAxios";

// Define the async thunk to fetch all properties for admin
export const getAllProperties = createAsyncThunk(
  "allPropertyForAdmin/getAllProperties",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getApi("/getAllProperties");
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

const allPropertyForAdminSlice = createSlice({
  name: "allPropertyForAdmin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProperties.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getAllProperties.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.properties = action.payload;
      })
      .addCase(getAllProperties.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default allPropertyForAdminSlice.reducer;
