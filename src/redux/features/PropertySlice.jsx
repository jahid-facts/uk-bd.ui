import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi } from "../../config/configAxios";

// get all properties
export const getProperties = createAsyncThunk(
  "property/getProperties",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getApi("/getAllProperties");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  properties: [],
  status: "",
  error: null,
  success: null,
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProperties.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProperties.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.properties = action.payload;
        state.success = action.payload.message;
      })
      .addCase(getProperties.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.error;
        state.success = null;
      });
  },
});

export default propertySlice.reducer;

