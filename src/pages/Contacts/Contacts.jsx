import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactsList } from "components/ContactsList/ContactsList";
import { Container } from "components/Container/Container";
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";

export const Contacts = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	return (
		<section>
			<Container>
				<ContactForm />
				<ContactsList />
			</Container>
		</section>
	)
}
