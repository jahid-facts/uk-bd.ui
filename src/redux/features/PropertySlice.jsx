// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getApi } from "../../config/configAxios";

// // Async action to get all properties
// export const getProperties = createAsyncThunk(
//   "property/getProperties",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await getApi("/getAllProperties");
//       return response.data.properties;
//     } catch (error) {
//       return rejectWithValue(error.response.data.error);
//     }
//   }
// );

// const initialState = {
//   properties: [],
//   status: "idle", // Initial status
// };

// const propertySlice = createSlice({
//   name: "property",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getProperties.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(getProperties.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.properties = action.payload;
//       })
//       .addCase(getProperties.rejected, (state) => {
//         state.status = "failed";
//       });
//   },
// });

// export default propertySlice.reducer;


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi } from "../../config/configAxios";

// Async action to get all properties
export const getProperties = createAsyncThunk(
  "property/getProperties",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await getApi("/getAllProperties");
      return fulfillWithValue(response.data.properties);
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

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProperties.pending, (state) => {
        state.status = "loading";
        state.error = null; 
      })
      .addCase(getProperties.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.properties = action.payload;
      })
      .addCase(getProperties.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default propertySlice.reducer;
