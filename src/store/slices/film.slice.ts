import apis from "@/apis"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface Film {
    id: string,
    title: string,
    releaseYear: number,
    poster: string,
    source: string,
    des: string,
}

interface FilmState {
    data: Film[] | null,
    loading: boolean
}

let initialState: FilmState = {
    data: null,
    loading: false
}

const filmSlice = createSlice({
    name: "film",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        }
    },
})

export const filmReducer = filmSlice.reducer;
export const filmAction = {
    ...filmSlice.actions
}