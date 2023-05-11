import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllContacts = createAsyncThunk(
	"contacts/fetchAllContacts",
	async (credantials, thunkAPI) => {
		try {
			const resoponse = await axios.get("");
			return resoponse.data;
		} catch (error) {
			console.warn(error)
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
