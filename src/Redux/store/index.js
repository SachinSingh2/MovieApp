import { configureStore } from '@reduxjs/toolkit';
import {movieReducer} from '../Slices/movieSlice'; // Assuming "movieSlice" is in the correct path and the file is named "movieSlice.js"

const store = configureStore({
  reducer: {
    movie: movieReducer, // Use "movieReducer" instead of "MovieReducer"
    // Add other reducers as needed
  },
});

export default store;
