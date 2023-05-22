import sass from "./AuthNav.module.scss";
import { NavLink } from "react-router-dom";

export const AuthNav = () => {
	return (
		<div className={sass.AuthNav}>
			<NavLink to="/register">Register</NavLink>
			<NavLink to="/login">Log In</NavLink>
		</div>
	)
};
