import { Container } from "components/Container/Container"
import { RegisterForm } from "components/RegisterForm/RegisterForm"
import { Title } from "components/Title/Title"

export const Register = () => {
	return (
		<div>
			<Container>
				<Title title="Register" />
				<RegisterForm />
			</Container>
		</div>
	)
}
