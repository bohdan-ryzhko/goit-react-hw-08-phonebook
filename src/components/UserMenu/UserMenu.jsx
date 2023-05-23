import { LoadingButton } from "@mui/lab";
import sass from "./UserMenu.module.scss";
import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux"
import { logOut } from "redux/auth/operations";

export const UserMenu = () => {
	const dispatch = useDispatch();
	const { isLoadingRegister } = useAuth();

	return (
		<div className={sass.UserMenu}>
			<LoadingButton loading={isLoadingRegister} type="button" onClick={() => dispatch(logOut())}>
				Logout
			</LoadingButton>
		</div>
	)
};
