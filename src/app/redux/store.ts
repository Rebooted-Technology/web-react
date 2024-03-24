import { combineReducers, configureStore } from "@reduxjs/toolkit";
import rebootedApi from "../api/rebootedApi";
import rebootedSlice from "../api/rebootedSlice";

const rootReducer = combineReducers({
	[rebootedApi.reducerPath]: rebootedApi.reducer,
	[rebootedSlice.reducerPath]: rebootedSlice.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rebootedApi.middleware),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
