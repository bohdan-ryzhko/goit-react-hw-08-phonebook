import { LoadingButton } from "@mui/lab";
import { FormControl, FormGroup, FormLabel, Input, InputLabel } from "@mui/material";
import { ErrorText } from "components/ErrorText/ErrorText";
import { groupStyles, stylesButton } from "constants/formStyles";
import { useAuth } from "hooks/useAuth";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { patchContact } from "redux/contacts/operations";
const required = { required: true };

export const RewriteForm = ({ currentContact }) => {
	const { control, reset, handleSubmit, formState: { errors } } = useForm();
	const { isCreatingLoad, contacts } = useAuth();
	const dispatch = useDispatch();

	const onSubmit = (data) => {
		const repeatName = contacts.some(contact => contact.name === data.name);
		if (repeatName) {
			toast.error(`${data.name} already in the contact book`);
			return;
		}
		dispatch(patchContact({ id: currentContact.id, ...data }));
		toast.success(`${data.name} - contact change!`);
		reset();
	}

	const isDisabled = Object.keys(errors).length > 0;

	return (
		<form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
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
								<InputLabel error={errors.name} htmlFor="Phone">Phone</InputLabel>
								<Input error={errors.name} id="Phone" {...field} />
							</FormControl>
						}
					/>
					{errors.name && <ErrorText text="Phone field is required" />}
				</FormLabel>
			</FormGroup>
			<LoadingButton loading={isCreatingLoad} disabled={isDisabled} sx={stylesButton} type="submit">Change Contact</LoadingButton>
		</form>
	)
}
