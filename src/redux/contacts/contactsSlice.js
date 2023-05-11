import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
	name: "contacts",
	initialState: {
		items: [],
		isLoad: false,
		error: null,
	},
	extraReducers: build => {

	}
});

export const contactsReducer = contactsSlice.reducer;