import apis from "@/apis";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface User {
    userName: string,
    password: string,
}

interface UserState {
    data: User | null,
    loading: boolean
}

let initialState: UserState = {
    data: null,
    loading: false
}
const fetchUser = createAsyncThunk(
    "authen/validateToken",
    async () => {
        const res = await apis.authen.getData({
            token: localStorage.getItem("token") || "null"
        })
        return res.data.data
    }
)
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
        })
        builder.addCase(fetchUser.rejected, (state) => {
            state.loading = false
        })
    },
})

export const userReducer = userSlice.reducer;
export const userAction = {
    ...userSlice.actions,
    fetchUser
}