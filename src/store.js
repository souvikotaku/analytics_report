// src/store.js
import { configureStore } from '@reduxjs/toolkit';

// Import your slice(s) here
import selectedReducer from "./features/selectedSlice";

const store = configureStore({
  reducer: {
    selected: selectedReducer,  // Add your slice reducers here
  },
});

export default store;
