import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userAction, userReducer } from './slices/user.slice'
import { filmReducer } from "./slices/film.slice";

const RootReducer = combineReducers({
    userStore: userReducer,
    filmStore: filmReducer,
})
export type StoreType = ReturnType<typeof RootReducer>;
export const store = configureStore({
    reducer: RootReducer
})
store.dispatch(userAction.fetchUser())