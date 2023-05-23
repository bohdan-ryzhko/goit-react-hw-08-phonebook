import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, registerUser, fetchCurrentUser } from "./operations";

const handlePending = state => {
	state.isLoadingRegister = true;
};

const handleFulfilled = (state, { payload }) => {
	state.isLoadingRegister = false;
	state.user = payload.user;
	state.token = payload.token;
	state.isLoggedIn = true;
}

const handleRejected = (state) => {
	state.isLoadingRegister = false;
};

const handleLogoutFulfilled = state => {
	state.isLoadingRegister = false;
	state.user = { name: null, email: null };
	state.token = null;
	state.isLoggedIn = false;
	state.isRefreshing = false;
}

const handleRejectedLog = (state) => {
	state.isLoadingRegister = false;
	state.user = { name: null, email: null }
	state.token = null;
	state.isLoggedIn = false;
	state.isRefreshing = false;
	state.isLoadingRegister = false;
}

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: { name: null, email: null },
		token: null,
		isLoggedIn: false,
		isRefreshing: false,
		isLoadingRegister: false,
	},
	extraReducers: builder =>
		builder
			.addCase(registerUser.pending, handlePending)
			.addCase(registerUser.fulfilled, handleFulfilled)
			.addCase(registerUser.rejected, handleRejected)
			.addCase(logIn.pending, handlePending)
			.addCase(logIn.fulfilled, handleFulfilled)
			.addCase(logIn.rejected, handleRejectedLog)
			.addCase(logOut.pending, handlePending)
			.addCase(logOut.fulfilled, handleLogoutFulfilled)
			.addCase(logOut.rejected, handleRejectedLog)
			.addCase(fetchCurrentUser.fulfilled, (state, action) => {
				state.isLoadingRegister = false;
				state.user = action.payload;
				state.isLoggedIn = true;
			})
			.addCase(fetchCurrentUser.rejected, (state) => {
				state.isLoadingRegister = false;
				state.user = { name: null, email: null }
				state.token = null;
				state.isLoggedIn = false;
				state.isRefreshing = false;
			})
});

export const authReducer = authSlice.reducer;