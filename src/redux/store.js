import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducer/userSlice'; // Import your user slice here

const store = configureStore({
  reducer: {
    user: userReducer,
    // Add other reducers here if needed
  },
});

export default store;
