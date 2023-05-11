export const handlePending = state => state;

export const handleFulfilled = (state, { payload }) => {
	state.user = payload.user;
	state.token = payload.token;
	state.isLoggedIn = true;
}

export const handleRejected = (state, { payload }) => state;