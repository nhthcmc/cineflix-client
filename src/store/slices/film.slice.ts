import apis from "@/apis"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface Film {
    title: string,
    releaseYear: string,
    poster: string,
    source: string
}

interface FilmState {
    data: Film | null,
    loading: boolean
}

let initialState: FilmState = {
    data: null,
    loading: false
}

const filmSlice = createSlice({
    name: "film",
    initialState,
    reducers: {},

})

export const filmReducer = filmSlice.reducer;
export const filmAction = {
    ...filmSlice.actions
}