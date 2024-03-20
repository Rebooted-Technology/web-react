import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
