import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "./endpoints";
import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setAuthHeader = token => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const clearAuthHeader = () => {
	axios.defaults.headers.common.Authorization = "";
}

export const registerUser = createAsyncThunk(
	"auth/register",
	async (credentials, thunkAPI) => {
		try {
			const response = await axios.post(endpoints.SIGNUP, credentials);
			setAuthHeader(response.data.token);
			return response.data;
		} catch (error) {
			if (error.response.status === 400) {
				toast.warn("Name taken, please try another one");
			}
			return thunkAPI.rejectWithValue(error.message);
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
			if (error.response.status === 400) {
				toast.warn("Incorrect login or password");
			}
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const logOut = createAsyncThunk(
	"auth/logout",
	async (_, thunkAPI) => {
		try {
			await axios.post(endpoints.LOGOUT);
			clearAuthHeader();
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const fetchCurrentUser = createAsyncThunk(
	"auth/refresh",
	async (_, thunkAPI) => {
		const { auth } = thunkAPI.getState();
		const persistedToken = auth.token;

		if (!persistedToken) return thunkAPI.rejectWithValue(auth);

		setAuthHeader(persistedToken);

		try {
			const { data } = await axios.get(endpoints.CURRENT);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(auth)
		}
	}
);
