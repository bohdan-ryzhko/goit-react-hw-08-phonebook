export const selectUser = ({ auth }) => auth.user;
export const selectIsLoggedIn = ({ auth }) => auth.isLoggedIn;
export const selectIsRefreshing = ({ auth }) => auth.isRefreshing;
export const selectIsLoadingRegister = ({ auth }) => auth.isLoadingRegister;
