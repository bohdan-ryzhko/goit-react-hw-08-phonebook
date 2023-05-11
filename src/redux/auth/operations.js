import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "./endpoints";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setAuthHeader = token => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const clearAuthHeader = () => {
	axios.defaults.headers.common.Authorization = "";
}

export const registerUser = createAsyncThunk(
	"auth/redister",
	async (credentials, thunkAPI) => {
		try {
			const response = await axios.post(endpoints.SIGNUP, credentials);
			setAuthHeader(response.data.token);
			return response.data;
		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const logIn = createAsyncThunk(
	"auth/login",
	async (credentials, thunkAPI) => {
		try {
			const response = await axios.post(endpoints.LOGIN, credentials);
			setAuthHeader(response.data.token);
			return response.data;
		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const logOut = createAsyncThunk(
	"auth/logout",
	async (_, thunkAPI) => {
		try {
			await axios.post('/users/logout');
			clearAuthHeader();
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
