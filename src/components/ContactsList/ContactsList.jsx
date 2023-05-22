import { useAuth } from "hooks/useAuth"
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";
import { CiCircleRemove } from 'react-icons/ci';
import { List, ListItem, Button, Typography } from '@mui/material';

const contactStyles = {
	flexBasis: "100%"
}

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
				<List sx={{ display: "flex", flexDirection: "column", gap:"10px" }}>
					{
						contacts.map(contact =>
							<ListItem sx={{ border: "1px solid #1976d2", borderRadius: "10px" }} key={contact.id}>
								<Typography sx={contactStyles}>{contact.name}</Typography>
								<Typography sx={contactStyles}>{contact.number}</Typography>
								<Button
									sx={{ padding: 0, minWidth: "35px", height: "35px" }}
									onClick={() => handleDeleteContact(contact.id)}>
									<CiCircleRemove size={30} />
								</Button>
							</ListItem>
						)
					}
				</List>
			}
		</>
	)
}