import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing, selectUser } from "redux/auth/selectors";
import { selectContacts, selectContactsError, selectContactsLoad } from "redux/contacts/selectors";

export const useAuth = () => ({
	isLoggedIn: useSelector(selectIsLoggedIn),
	isRefreshing: useSelector(selectIsRefreshing),
	user: useSelector(selectUser),
	contacts: useSelector(selectContacts),
	isLoadContacts: useSelector(selectContactsLoad),
	errorContacts: useSelector(selectContactsError),
});