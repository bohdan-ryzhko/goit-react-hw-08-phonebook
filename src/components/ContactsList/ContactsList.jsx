import { useAuth } from "hooks/useAuth"
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";
import { List } from '@mui/material';
import { Contact } from "components/Contact/Contact";
import { getFilteredContacts } from "services/getFilteredContacts";

export const ContactsList = () => {
	const { contacts, filter } = useAuth();
	const dispatch = useDispatch();

	const handleDeleteContact = id => {
		dispatch(deleteContact(id));
	}

	const filteredContactsByName = getFilteredContacts(filter, contacts);

	return (
		<>
			{
				contacts.length > 0 &&
				<List sx={{ display: "flex", flexDirection: "column", gap:"10px" }}>
					{
						filteredContactsByName.length === 0
							? <p>Not found</p>
							: (
								filteredContactsByName.map(contact =>
									<Contact
										key={contact.id}
										contact={contact}
										onClick={() => handleDeleteContact(contact.id)}
									/>
							))
					}
				</List>
			}
		</>
	)
}
