import { useSelector } from "react-redux";
import { selectIsLoadingRegister, selectIsLoggedIn, selectIsRefreshing, selectUser } from "redux/auth/selectors";
import { selectContacts, selectContactsError, selectContactsLoad, selectIsCreatingLoad } from "redux/contacts/selectors";
import { selectFilter } from "redux/filter/selectors";

export const useAuth = () => ({
	isLoggedIn: useSelector(selectIsLoggedIn),
	isRefreshing: useSelector(selectIsRefreshing),
	user: useSelector(selectUser),
	contacts: useSelector(selectContacts),
	isLoadContacts: useSelector(selectContactsLoad),
	errorContacts: useSelector(selectContactsError),
	filter: useSelector(selectFilter),
	isCreatingLoad: useSelector(selectIsCreatingLoad),
	isLoadingRegister: useSelector(selectIsLoadingRegister),
});
