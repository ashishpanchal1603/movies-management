import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../reducer/movies.reducer"; // Import your reducer

const store = configureStore({
  reducer: {
    movies: movieReducer, // Redux slice for movies
  },
});

export default store;
