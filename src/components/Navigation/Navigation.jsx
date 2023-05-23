import sass from "./Navigation.module.scss";
import { useAuth } from "hooks/useAuth";
import { NavLink, useLocation } from "react-router-dom";

export const Navigation = () => {
	const { isLoggedIn } = useAuth();
	
	const { pathname } = useLocation();
	console.log(pathname);
	return (
		<nav className={sass.nav}>
			<NavLink className={pathname === "/" ? sass.navLinkActive : sass.navLink} to="/">Home</NavLink>
			{
				isLoggedIn &&
				<NavLink className={pathname === "/contacts" ? sass.navLinkActive : sass.navLink} to="/contacts">Contacts</NavLink>
			}
		</nav>
	)
}
