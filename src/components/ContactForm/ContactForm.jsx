import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Input, FormLabel, FormGroup, Button } from '@mui/material';
import { createContact } from "redux/contacts/operations";
import { groupStyles, inpitStyles, stylesButton, form } from "constants/formStyles";
const required = { required: true };

export const ContactForm = () => {

	const dispatch = useDispatch();
	const { control, reset, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = (data) => {
		dispatch(createContact(data));
		reset();
	}

	return (
		<form style={form} onSubmit={handleSubmit(onSubmit)} autoComplete="off">
			<FormGroup sx={groupStyles}>
				<FormLabel>
					<Controller
						defaultValue=""
						name="name"
						control={control}
						rules={required}
						render={({ field }) =>
							<Input
								sx={inpitStyles}
								type="text"
								placeholder="Name"
								{...field}
							/>}
					/>
					{errors.email && <span>This field is required</span>}
				</FormLabel>
				<FormLabel>
					<Controller
						defaultValue=""
						name="number"
						control={control}
						rules={required}
						render={({ field }) =>
							<Input
								sx={inpitStyles}
								type="text"
								placeholder="Phone"
								{...field}
							/>}
					/>
					{errors.password && <span>This field is required</span>}
				</FormLabel>
			</FormGroup>
			<Button sx={stylesButton} type="submit">Add Contact</Button>
		</form>
	)
}