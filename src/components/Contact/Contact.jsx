import sass from "./Contact.module.scss";
import { Button, ListItem, Typography } from "@mui/material";
import { CiCircleRemove } from "react-icons/ci";
import { AiFillEdit } from "react-icons/ai";

const contactStyles = {
	flexBasis: "100%"
}

export const Contact = ({ contact, onDelete, handleToggleModal }) => {
	return (
		<ListItem sx={{ border: "1px solid #1976d2", borderRadius: "10px" }}>
			<Typography sx={contactStyles}>{contact.name}</Typography>
			<Typography sx={contactStyles}>{contact.number}</Typography>
			<Button
				className={sass.rewrite}
				onClick={handleToggleModal}
				sx={{ padding: 0, minWidth: "35px", height: "35px", color: "#d26241" }}>
				<AiFillEdit size={25} />
			</Button>
			<Button
				sx={{ padding: 0, minWidth: "35px", height: "35px" }}
				onClick={onDelete}>
				<CiCircleRemove size={30} />
			</Button>
		</ListItem>
	)
}
