import { Button, ListItem, Typography } from "@mui/material";
import { CiCircleRemove } from "react-icons/ci";
// import { AiFillEdit } from "react-icons/ai";

const contactStyles = {
	flexBasis: "100%"
}

export const Contact = ({ contact, onClick }) => {
	return (
		<ListItem sx={{ border: "1px solid #1976d2", borderRadius: "10px" }}>
			<Typography sx={contactStyles}>{contact.name}</Typography>
			<Typography sx={contactStyles}>{contact.number}</Typography>
			<Button
				sx={{ padding: 0, minWidth: "35px", height: "35px" }}
				onClick={onClick}>
				<CiCircleRemove size={30} />
			</Button>
		</ListItem>
	)
}

{/* <Button
				sx={{ padding: 0, minWidth: "35px", height: "35px" }}
				onClick={onClick}>
				<AiFillEdit size={25} />
			</Button> */}