import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Input, FormLabel, FormGroup, Button, FormControl, InputLabel } from '@mui/material';
import { createContact } from "redux/contacts/operations";
import { groupStyles, stylesButton, form } from "constants/formStyles";
import { ErrorText } from "components/ErrorText/ErrorText";
import { toast } from "react-toastify";
import { useAuth } from "hooks/useAuth";
const required = { required: true };

export const ContactForm = () => {
	const { contacts } = useAuth();
	const dispatch = useDispatch();
	const { control, reset, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = (data) => {
		const repeatName = contacts.some(contact => contact.name === data.name);
		if (repeatName) return toast.error(`${data.name} already in your contacts`)
		dispatch(createContact(data));
		toast.success(`${data.name} added in your contacts`);
		reset();
	}

	const isDisabled = Object.keys(errors).length > 0;

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
							<FormControl sx={{ width: "100%" }} variant="standard">
								<InputLabel error={errors.name} htmlFor="Name">Name</InputLabel>
								<Input error={errors.name} id="Name" {...field} />
							</FormControl>
						}
					/>
					{errors.name && <ErrorText text="Name field is required" />}
				</FormLabel>
				<FormLabel>
					<Controller
						defaultValue=""
						name="number"
						control={control}
						rules={required}
						render={({ field }) =>
							<FormControl sx={{ width: "100%" }} variant="standard">
								<InputLabel error={errors.number} htmlFor="Phone">Phone</InputLabel>
								<Input error={errors.number} id="Phone" {...field} />
							</FormControl>
						}
					/>
					{errors.number && <ErrorText text="Phone field is required" />}
				</FormLabel>
			</FormGroup>
			<Button disabled={isDisabled} sx={stylesButton} type="submit">Add Contact</Button>
		</form>
	)
}
