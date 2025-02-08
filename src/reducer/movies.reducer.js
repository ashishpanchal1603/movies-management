import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesList: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.moviesList.push(action.payload);
    },
    updateMovie: (state, action) => {
      console.log('action?.payload?.id', action?.payload?.id)
      const index = state.moviesList.findIndex((movie) => movie.id === action.payload.id);
      if (index !== -1) {
        state.moviesList[index] = action.payload;
      }
    },
    deleteMovie:(state,action)=>{
      console.log(action,"action22")
      state.moviesList = state.moviesList.filter(movie=>movie.id !== action.payload)
    }
  },
});

export const { addMovie, updateMovie,deleteMovie } = movieSlice.actions;
export default movieSlice.reducer;
