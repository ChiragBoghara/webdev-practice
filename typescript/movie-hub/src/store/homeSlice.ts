import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Genre = {
  id: number
  name: string
}

type URL = {
  backdrop: string,
  poster: string,
  profile: string
}

export interface HomeState {
  url: URL,
  genres: Genre[]
}

const initialState: HomeState = {
  url: {
    backdrop: "",
    poster: "",
    profile: ""
  },
  genres: [] as Genre[],
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getApiConfiguration: (state, action: PayloadAction<URL>) => {
      state.url = action.payload
    },
    getGenres: (state, action: PayloadAction<Genre[]>) => {
      state.genres = action.payload
    },
  },
})

export const { getApiConfiguration, getGenres} = homeSlice.actions;

export default homeSlice.reducer