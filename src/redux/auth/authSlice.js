import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, registerUser, fetchCurrentUser } from "./operations";

const handlePending = state => state;

const handleFulfilled = (state, { payload }) => {
	state.user = payload.user;
	state.token = payload.token;
	state.isLoggedIn = true;
}

const handleRejected = (state, { payload }) => state;

const handleLogoutFulfilled = state => {
	state.user = { name: null, email: null }
	state.token = null
	state.isLoggedIn = false
	state.isRefreshing = false
}

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: { name: null, email: null },
		token: null,
		isLoggedIn: false,
		isRefreshing: false,
	},
	extraReducers: builder =>
		builder
			.addCase(registerUser.pending, handlePending)
			.addCase(registerUser.fulfilled, handleFulfilled)
			.addCase(registerUser.rejected, handleRejected)
			.addCase(logIn.fulfilled, handleFulfilled)
			.addCase(logOut.fulfilled, handleLogoutFulfilled)
			.addCase(fetchCurrentUser.fulfilled, (state, action) => {
				state.user = action.payload;
				state.isLoggedIn = true;
			})
			.addCase(fetchCurrentUser.rejected, (state, action) => {
				state.user = { name: null, email: null }
				state.token = null;
				state.isLoggedIn = false;
				state.isRefreshing = false;
			})
});

export const authReducer = authSlice.reducer;