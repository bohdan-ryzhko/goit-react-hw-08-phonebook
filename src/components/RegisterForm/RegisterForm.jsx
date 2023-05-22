import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "redux/auth/operations";
import { FormLabel, FormGroup, Button } from '@mui/material';
import { groupStyles, stylesButton, form } from "constants/formStyles";
import { CustomInput } from "components/CustomInput/CustomInput";
import { ErrorText } from "components/ErrorText/ErrorText";

const required = { required: true };

export const RegisterForm = () => {
	const dispatch = useDispatch();
	const { control, reset, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = data => {
		console.log(data);
		dispatch(registerUser(data));
		reset();
	};

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
								<CustomInput error={errors.name ? true : false} label="Name" type="text" field={field} />
							}
						/>
						{errors.name && <ErrorText text="Name field is required" />}
					</FormLabel>
					<FormLabel>
						<Controller
							defaultValue=""
							name="email"
							control={control}
							rules={required}
							render={({ field }) =>
								<CustomInput error={errors.email ? true : false} label="Email" type="email" field={field} />
							}
						/>
						{errors.email && <ErrorText text="Email field is required"/>}
					</FormLabel>
					<FormLabel>
						<Controller
							defaultValue=""
							name="password"
							control={control}
							rules={required}
							render={({ field }) =>
								<CustomInput error={errors.password ? true : false} label="Password" type="password" field={field} />
							}
						/>
						{errors.password && <ErrorText text="Password field is required"/>}
					</FormLabel>
				</FormGroup>
				<Button disabled={isDisabled} sx={stylesButton} type="submit">Register</Button>
			</form>
	)
}
