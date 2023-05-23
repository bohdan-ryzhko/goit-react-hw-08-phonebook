import { createSlice } from "@reduxjs/toolkit";
import { createContact, deleteContact, fetchContacts, patchContact } from "./operations";

const contactsSlice = createSlice({
	name: "contacts",
	initialState: {
		items: [],
		isLoad: false,
		isCreatingLoad: false,
		isDeleteContact: false,
		error: null,
	},
	extraReducers: builder => {
		builder
			.addCase(fetchContacts.pending, (state) => {
				state.isLoad = true;
			})
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.isLoad = false;
				state.error = null;
				state.items = action.payload;
			})
			.addCase(fetchContacts.rejected, (state, action) => {
				state.isLoad = false;
				state.error = action.payload;
			})
			.addCase(createContact.pending, (state) => {
				state.isCreatingLoad = true;
			})
			.addCase(createContact.fulfilled, (state, action) => {
				state.isCreatingLoad = false;
				state.error = null;
				state.items.push(action.payload);
			})
			.addCase(createContact.rejected, (state, action) => {
				state.isCreatingLoad = false;
				state.error = action.payload;
			})
			.addCase(deleteContact.pending, (state) => {
				state.isDeleteContact = true;
			})
			.addCase(deleteContact.fulfilled, (state, action) => {
				state.isCreatingLoad = false;
				state.error = null;
				state.items = state.items.filter(contact => contact.id !== action.payload.id);
			})
			.addCase(deleteContact.rejected, (state, action) => {
				state.isCreatingLoad = false;
				state.error = action.payload;
			})
			.addCase(patchContact.pending, (state) => {
				state.isCreatingLoad = true;
			})
			.addCase(patchContact.fulfilled, (state, action) => {
				state.isCreatingLoad = false;
				state.error = null;
				const indexContact = state.items.findIndex(contact => contact.id === action.payload.id);
				state.items.splice(indexContact, 1, action.payload);
			})
	}
});

export const contactsReducer = contactsSlice.reducer;