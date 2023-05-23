import sass from "./UserMenu.module.scss";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux"
import { logOut } from "redux/auth/operations";

export const UserMenu = () => {
	const dispatch = useDispatch();

	return (
		<div className={sass.UserMenu}>
			<Button type="button" onClick={() => dispatch(logOut())}>
				Logout
			</Button>
		</div>
	)
};
