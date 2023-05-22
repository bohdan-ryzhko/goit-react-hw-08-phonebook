import { Typography } from "@mui/material";

export const Title = ({ title }) => (
	<Typography sx={{ marginBottom: "20px", fontSize: "30px", textAlign: "center" }} variant="h2" component="h2">
		{title}
	</Typography>
)