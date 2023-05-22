import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import { Input, FormLabel, FormGroup, Button } from '@mui/material';
import { groupStyles, inpitStyles, stylesButton, form } from "constants/formStyles";

const required = { required: true };

export const LoginForm = () => {
	const dispatch = useDispatch();
	const { control, reset, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = data => {
		dispatch(logIn(data));
		reset();
	};

	return (
		<form style={form} onSubmit={handleSubmit(onSubmit)} autoComplete="off">
			<FormGroup sx={groupStyles}>
				<FormLabel>
					<Controller
						defaultValue=""
						name="email"
						control={control}
						rules={required}
						render={({ field }) =>
							<Input
								sx={inpitStyles}
								type="email"
								placeholder="Email"
								{...field}
							/>}
					/>
					{errors.email && <span>This field is required</span>}
				</FormLabel>
				<FormLabel>
					<Controller
						defaultValue=""
						name="password"
						control={control}
						rules={required}
						render={({ field }) =>
							<Input
								sx={inpitStyles}
								type="password"
								placeholder="Password"
								{...field}
							/>}
					/>
					{errors.password && <span>This field is required</span>}
				</FormLabel>
			</FormGroup>
			<Button sx={stylesButton} type="submit">Log In</Button>
		</form>
	)
}
