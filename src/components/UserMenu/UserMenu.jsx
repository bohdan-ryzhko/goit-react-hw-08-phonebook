import { Button } from "@mui/material";
import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux"
import { logOut } from "redux/auth/operations";

export const UserMenu = () => {
	const dispatch = useDispatch();
	const { user } = useAuth();

	return (
		<div>
			<p>Welcome, {user.name}</p>
			<Button type="button" onClick={() => dispatch(logOut())}>
				Logout
			</Button>
		</div>
	)
};
