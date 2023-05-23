import { useAuth } from "hooks/useAuth"
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";
import { List, Modal } from '@mui/material';
import { Contact } from "components/Contact/Contact";
import { getFilteredContacts } from "services/getFilteredContacts";
import { RewriteForm } from "components/RewriteForm/RewriteForm";
import { useEffect, useState } from "react";

export const ContactsList = ({ openRewriteModal, setOpenRewriteModal }) => {
	const { contacts, filter, isCreatingLoad } = useAuth();
	const dispatch = useDispatch();
	const [currentContact, setCurrentContact] = useState(null);

	const handleDeleteContact = id => {
		dispatch(deleteContact(id));
	}

	const handleToggleModal = id => {
		if (id === undefined) {
			setOpenRewriteModal(prev => !prev);
			return;
		}

		setOpenRewriteModal(prev => !prev);
		const findContact = contacts.find(contact => contact.id === id);
		setCurrentContact(findContact);
	}

	useEffect(() => {
		if (!isCreatingLoad) {
			setOpenRewriteModal(false);
		}
	}, [isCreatingLoad, setOpenRewriteModal]);

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
										handleToggleModal={() => handleToggleModal(contact.id)}
										onDelete={() => handleDeleteContact(contact.id)}
									/>
							))
					}
				</List>
			}
			<Modal
				open={openRewriteModal}
				onClose={() => handleToggleModal()}
				aria-labelledby="parent-modal-title"
				aria-describedby="parent-modal-description"
				sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
			>
				<div style={{
					width: "300px",
					height: "500px",
					background: "#fff",
					borderRadius: "10px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					gap: "10px",
					padding: "0 10px",
					flexDirection: "column"
				}}>
					{
						currentContact &&
						<>
							<p>Name: {currentContact.name}</p>
							<p>Number: {currentContact.number}</p>
						</>
					}
					<RewriteForm currentContact={currentContact} />
				</div>
			</Modal>
		</>
	)
}
