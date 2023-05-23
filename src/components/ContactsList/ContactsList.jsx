import sass from "./ContactsList.module.scss";
import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";
import { List, Modal } from '@mui/material';
import { Contact } from "components/Contact/Contact";
import { getFilteredContacts } from "services/getFilteredContacts";
import { RewriteForm } from "components/RewriteForm/RewriteForm";
import { useEffect, useState } from "react";
import { CiCircleRemove } from "react-icons/ci";

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
				<div className={sass.modalBody}>
					<button
						onClick={() => handleToggleModal()}
						className={sass.closeModal}>
						<CiCircleRemove size={30} />
					</button>
					<RewriteForm
						name={currentContact?.name}
						number={currentContact?.number}
						currentContact={currentContact}
					/>
				</div>
			</Modal>
		</>
	)
}
