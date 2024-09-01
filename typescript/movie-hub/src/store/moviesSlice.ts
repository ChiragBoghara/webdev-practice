import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Movie from "../Models/Movie";

type MoviesState = {
    trending: Movie[];
    popular: Movie[],
    topRated: Movie[]
};

const initialState: MoviesState = {
    trending: [] as Movie[],
    topRated: [] as Movie[],
    popular: [] as Movie[],
};

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setTrending(state, action: PayloadAction<Movie[]>) {
            state.trending = action.payload;
        },
        setPopular(state, action: PayloadAction<Movie[]>) {
            state.popular = action.payload;
        },
        setTopRated(state, action: PayloadAction<Movie[]>) {
            state.topRated = action.payload;
        }
    },
});

export const moviesActions = moviesSlice.actions;
export default moviesSlice.reducer;