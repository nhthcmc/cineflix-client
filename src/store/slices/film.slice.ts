import { api } from '@/apis';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Film {
    id: number;
}
interface FilmState {
    data: Film | null;
    loading: boolean
}

let initialState: FilmState = {
    data: null,
    loading: false
}

const filmSlice = createSlice({
    name: 'film',
    initialState,
    reducers{},

})
export const filmReducer = filmSlice.reducer;
export const filmAction = {
    ...filmSlice.actions
}