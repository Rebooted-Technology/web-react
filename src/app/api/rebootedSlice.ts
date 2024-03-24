import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../redux/store";
import rebootedApi from "./rebootedApi";

export interface RebootedState {
	apiLoading: boolean;
	apiAvailable: boolean;
}

const initialState: RebootedState = {
	apiLoading: true,
	apiAvailable: false,
};

const rebootedSlice = createSlice({
	name: "rebooted",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(
			rebootedApi.endpoints.getHealthCheck.matchPending,
			(state, { payload }) => {
				state.apiLoading = true;
				state.apiAvailable = false;
			},
		);
		builder.addMatcher(
			rebootedApi.endpoints.getHealthCheck.matchFulfilled,
			(state, { payload }) => {
				state.apiLoading = false;
				state.apiAvailable = true;
			},
		);
		builder.addMatcher(
			rebootedApi.endpoints.getHealthCheck.matchRejected,
			(state, { payload }) => {
				state.apiLoading = false;
				state.apiAvailable = false;
			},
		);
	},
});

const selectServerLoading = (state: AppState) => state.rebooted.apiLoading;
const selectServerAvailable = (state: AppState) => state.rebooted.apiAvailable;

export { selectServerLoading, selectServerAvailable };

export default rebootedSlice;
