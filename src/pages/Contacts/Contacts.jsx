import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactsList } from "components/ContactsList/ContactsList";
import { Container } from "components/Container/Container";
import { Title } from "components/Title/Title";
import { useAuth } from "hooks/useAuth";
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { Slide, ToastContainer } from "react-toastify";
import { fetchContacts } from "redux/contacts/operations";
import "react-toastify/dist/ReactToastify.css";
import { Filter } from "components/Filter/Filter";

export const Contacts = () => {
	const dispatch = useDispatch();

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
				<ContactsList />
			</Container>
			<ToastContainer
				position="top-right"
				autoClose={4000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				pauseOnHover
				theme="colored"
				transition={Slide}
			/>
		</section>
	)
}
