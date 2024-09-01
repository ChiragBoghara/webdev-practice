import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import uiSlice from "./uiSlice";
import moviesSlice from "./moviesSlice";
import movieDetailSlice from "./movieDetail";

const store = configureStore({
  reducer: {
    home: homeSlice,
    ui: uiSlice,
    movies: moviesSlice,
    currentMovie: movieDetailSlice
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store