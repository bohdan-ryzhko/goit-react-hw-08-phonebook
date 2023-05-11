import { FormLabel, Input } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const required = { required: true };

export const CastomLabelField = ({ name, type, placeholder }) => {
	const { control, formState: { errors } } = useForm();

	return (
		<FormLabel>
			<Controller
				defaultValue=""
				name={name}
				control={control}
				rules={required}
				render={({ field }) =>
					<Input
						type={type}
						placeholder={placeholder}
						{...field}
					/>}
			/>
			{errors.name && <span>This field is required</span>}
		</FormLabel>
	)
};