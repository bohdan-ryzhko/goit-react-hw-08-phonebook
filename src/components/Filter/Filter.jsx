import { FormControl, Input, InputLabel } from "@mui/material"
import { useDispatch } from "react-redux"
import { filteredByName } from "redux/filter/filterSlice";
import debounce from "lodash.debounce";

export const Filter = () => {
	const dispatch = useDispatch();

	const makeValue = debounce(value => {
		dispatch(filteredByName(value));
	}, 300);

	const controllSearchName = ({ target }) => {
		makeValue(target.value);
	}

	return (
		<FormControl variant="standard">
			<InputLabel htmlFor="Search">Search by name</InputLabel>
			<Input onChange={controllSearchName} id="Search" defaultValue="" />
		</FormControl>
	)
}
