import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const fetchContacts = createAsyncThunk(
	"contacts/fetchContacts",
	async (_, thunkAPI) => {
		const { auth } = thunkAPI.getState();
		const token = auth.token;
		try {
			if (!token) return thunkAPI.rejectWithValue(auth);

			const resoponse = await axios.get("/contacts", {
					headers: {
						Authorization: token
					}
				}
			);
			return resoponse.data;
		} catch (error) {
			console.warn(error)
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const createContact = createAsyncThunk(
	"contacts/createContact",
	async (credantials, thunkAPI) => {
		const { auth } = thunkAPI.getState();
		const token = auth.token;
		try {
			if (!token) return thunkAPI.rejectWithValue(auth);

			const resoponse = await axios.post("/contacts", credantials, {
					headers: { Authorization: token }
				}
			);
			return resoponse.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const deleteContact = createAsyncThunk(
	"contacts/deleteContact",
	async (contactId, thunkAPI) => {
		const { auth } = thunkAPI.getState();
		const token = auth.token;
		try {
			if (!token) return thunkAPI.rejectWithValue(auth);

			const resoponse = await axios.delete(`/contacts/${contactId}`, {
					headers: { Authorization: token }
				}
			);
			toast.info("Contact removed!");
			return resoponse.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const patchContact = createAsyncThunk(
	"auth/patchContact",
	async (currentContact, thunkAPI) => {
		const { auth } = thunkAPI.getState();
		const token = auth.token;

		try {
			if (!token) return thunkAPI.rejectWithValue(auth);
			const body = {
				name: currentContact.name,
				number: currentContact.number,
			}
			const response = await axios.patch(`/contacts/${currentContact.id}`, body, {
					headers: { Authorization: token }
				});
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
