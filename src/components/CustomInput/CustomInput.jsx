import { FormControl, InputLabel, OutlinedInput } from "@mui/material"
import { inpitStyles } from "constants/formStyles"

export const CustomInput = ({ label, type, field, error }) => (
	<FormControl sx={inpitStyles}>
		<InputLabel htmlFor={label}>{label}</InputLabel>
		<OutlinedInput id={label} error={error} type={type} label={label} {...field} />
	</FormControl>
)
