import sass from "./Navigation.module.scss";
import { useAuth } from "hooks/useAuth";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
	const { isLoggedIn } = useAuth();
	return (
		<nav className={sass.nav}>
			<NavLink to="/">Home</NavLink>
			{
				isLoggedIn &&
				<NavLink to="/contacts">Contacts</NavLink>
			}
		</nav>
	)
}
