import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Input, FormLabel, FormGroup, FormControl, InputLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { createContact } from "redux/contacts/operations";
import { groupStyles, stylesButton, form } from "constants/formStyles";
import { ErrorText } from "components/ErrorText/ErrorText";
import { toast } from "react-toastify";
import { useAuth } from "hooks/useAuth";
const required = { required: true };

export const ContactForm = () => {
	const { contacts, isCreatingLoad } = useAuth();
	const dispatch = useDispatch();
	const { control, reset, handleSubmit, formState: { errors } } = useForm();

	const isErrors = Object.keys(errors).length > 0;

	const onSubmit = (data) => {
		const repeatName = contacts.some(contact => contact.name === data.name);
		if (repeatName) return toast.error(`${data.name} already in your contacts`)
		dispatch(createContact(data));
		if (!isErrors) {
			toast.success(`${data.name} added in your contacts`);
			reset();
		}
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
							<FormControl sx={{ width: "100%" }} variant="standard">
								<InputLabel error={Boolean(errors.name)} htmlFor="Name">Name</InputLabel>
								<Input error={Boolean(errors.name)} id="Name" {...field} />
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
								<InputLabel error={Boolean(errors.number)} htmlFor="Phone">Phone</InputLabel>
								<Input error={Boolean(errors.number)} id="Phone" {...field} />
							</FormControl>
						}
					/>
					{errors.number && <ErrorText text="Phone field is required" />}
				</FormLabel>
			</FormGroup>
			<LoadingButton loading={isCreatingLoad} disabled={isErrors} sx={stylesButton} type="submit">Add Contact</LoadingButton>
		</form>
	)
}
