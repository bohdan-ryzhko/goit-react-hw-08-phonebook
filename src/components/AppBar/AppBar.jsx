import sass from "./AppBar.module.scss";
import { Container } from "components/Container/Container";
import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "hooks/useAuth";

export const AppBar = () => {
	const { isLoggedIn } = useAuth();

	return (
		<header className={sass.header}>
			<Container>
				<div className={sass.headerInner}>
					<Navigation />
					{isLoggedIn ? <UserMenu /> : <AuthNav />}
				</div>
			</Container>
		</header>
	)
};
