import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactsList } from "components/ContactsList/ContactsList";
import { Container } from "components/Container/Container";
import { Title } from "components/Title/Title";
import { useAuth } from "hooks/useAuth";
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { Filter } from "components/Filter/Filter";

export const Contacts = () => {
	const dispatch = useDispatch();
	const [openRewriteModal, setOpenRewriteModal] = useState(false);

	const { user: { name = "Anonimus" } } = useAuth();

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	return (
		<section>
			<Container>
				<Title title={`${name}, your contacts`} />
				<ContactForm />
				<Filter />
				<ContactsList openRewriteModal={openRewriteModal} setOpenRewriteModal={setOpenRewriteModal} />
			</Container>
		</section>
	)
}
