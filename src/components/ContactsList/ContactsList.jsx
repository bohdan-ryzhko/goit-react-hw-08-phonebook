import { useAuth } from "hooks/useAuth"
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";
import { CiCircleRemove } from 'react-icons/ci';

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
									onClick={() => handleDeleteContact(contact.id)}>
									<CiCircleRemove size={30} />
								</button>
							</li>
						)
					}
				</ul>
			}
		</>
	)
}
