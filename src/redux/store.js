import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./features/AuthSlice";
import PropertySlice from "./features/PropertySlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    propertise: PropertySlice,
  },
});

export default store;
