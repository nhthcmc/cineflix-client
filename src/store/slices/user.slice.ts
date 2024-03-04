import { api } from "@/apis";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface User {
    id: number;
    password: string;
}

interface UserState {
    data: User | null;
    loading: boolean
}

let initialState: UserState = {
    data: null,
    loading: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        })
    }
})
const fetchUser = createAsyncThunk(
    'user/validateToken',
    async () => {
        const res = await api.authen.register({
            token: localStorage.getItem("token") || "null"
        });
        return res.data.data
    }
)
export const userReducer = userSlice.reducer;
export const userAction = {
    ...userSlice.actions,
    fetchUser
}