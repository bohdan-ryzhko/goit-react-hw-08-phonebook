import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "redux/auth/operations";
import { Input, FormLabel, FormGroup, Button } from '@mui/material';

const required = { required: true };

export const RegisterForm = () => {
	const dispatch = useDispatch();
	const { control, reset, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = data => {
		console.log(data);
		dispatch(registerUser(data));
		reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
			<FormGroup>
				<FormLabel>
					<Controller
						defaultValue=""
						name="name"
						control={control}
						rules={required}
						render={({ field }) =>
							<Input
								type="text"
								placeholder="Name"
								{...field}
							/>}
					/>
					{errors.name && <span>This field is required</span>}
				</FormLabel>
				<FormLabel>
					<Controller
						defaultValue=""
						name="email"
						control={control}
						rules={required}
						render={({ field }) =>
							<Input
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
								type="password"
								placeholder="Password"
								{...field}
							/>}
					/>
					{errors.password && <span>This field is required</span>}
				</FormLabel>
			</FormGroup>
			<Button type="submit">Register</Button>
		</form>
	)
}
