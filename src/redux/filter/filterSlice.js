import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
	name: "filter",
	initialState: {
		value: "",
	},
	reducers: {
		filteredByName(state, action) {
			state.value = action.payload;
			return state;
		}
	}
});

export const { filteredByName } = filterSlice.actions;
export default filterSlice.reducer;