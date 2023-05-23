import { LoadingButton } from "@mui/lab";
import sass from "./UserMenu.module.scss";
import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux"
import { logOut } from "redux/auth/operations";
import { clearContacts } from "redux/contacts/contactsSlice";

export const UserMenu = () => {
	const dispatch = useDispatch();
	const { isLoadingRegister } = useAuth();

	const handleLogOut = () => {
		dispatch(logOut());
		dispatch(clearContacts());
	}

	return (
		<div className={sass.UserMenu}>
			<LoadingButton loading={isLoadingRegister} type="button" onClick={handleLogOut}>
				Logout
			</LoadingButton>
		</div>
	)
};
