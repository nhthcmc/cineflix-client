import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userAction, userReducer } from "./slices/user.slice";
import { chatReducer } from "./slices/chat.slice";

const RootReducer = combineReducers({
    userStore: userReducer,
    chatStore: chatReducer,
})
export type StoreType = ReturnType<typeof RootReducer>;
export const store = configureStore({
    reducer: RootReducer
})
store.dispatch(userAction.fetchUser(localStorage.getItem("token") || 'null'))