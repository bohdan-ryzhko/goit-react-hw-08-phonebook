import { useAuth } from "hooks/useAuth"
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";


export const ContactsList = () => {
	const { contacts } = useAuth();
	const dispatch = useDispatch();

	const handleDeleteContact = id => {
		dispatch(deleteContact(id));
	}

	return (
		<>
			{
				contacts.length > 0 &&
				<ul>
					{
						contacts.map(contact =>
							<li key={contact.id}>
								<p>{contact.name}</p>
								<p>{contact.number}</p>
								<button
									onClick={() => handleDeleteContact(contact.id)}
								>X</button>
							</li>
						)
					}
				</ul>
			}
		</>
	)
}
