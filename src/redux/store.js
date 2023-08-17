import { configureStore } from '@reduxjs/toolkit';
import AuthSilce from './features/AuthSilce';

const store = configureStore({
  reducer: {
    auth: AuthSilce,
    // Add other reducers here if needed
  },
});

export default store; 
