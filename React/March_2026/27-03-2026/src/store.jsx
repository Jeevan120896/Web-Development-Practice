// Redux store setup
import { configureStore } from '@reduxjs/toolkit';

// Import reducer
import counterReducer from './counterSlice';

// Create store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});