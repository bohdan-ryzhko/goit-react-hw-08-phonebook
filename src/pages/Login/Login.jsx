import { Container } from "components/Container/Container"
import { LoginForm } from "components/LoginForm/LoginForm"
import { Title } from "components/Title/Title"

export const Login = () => {
	return (
		<div>
			<Container>
				<Title title="Log In" />
				<LoginForm />
			</Container>
		</div>
	)
}
