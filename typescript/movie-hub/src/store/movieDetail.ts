import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieDetail } from "../Models/MovieDetail";

type MovieDetailState = {
    currentMovie: MovieDetail
};

const initialState: MovieDetailState = {
    currentMovie: {} as MovieDetail
};

const movieDetailSlice = createSlice({
    name: "movieDetail",
    initialState,
    reducers: {
        setMovieDetail(state, action: PayloadAction<MovieDetail>) {
            state.currentMovie = action.payload;
        }
    },
});

export const movieDetailActions = movieDetailSlice.actions;
export default movieDetailSlice.reducer;