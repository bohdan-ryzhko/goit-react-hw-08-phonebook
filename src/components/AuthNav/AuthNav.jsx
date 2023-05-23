import sass from "./AuthNav.module.scss";
import { NavLink, useLocation } from "react-router-dom";

export const AuthNav = () => {

	const { pathname } = useLocation();

	return (
		<div className={sass.AuthNav}>
			<NavLink className={pathname === "/register" ? sass.linkActive : sass.link} to="/register">Register</NavLink>
			<NavLink className={pathname === "/login" ? sass.linkActive : sass.link} to="/login">Log In</NavLink>
		</div>
	)
};
