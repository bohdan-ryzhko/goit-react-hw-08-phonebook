import sass from "./Home.module.scss";
import { Container } from "components/Container/Container";
import { Title } from "components/Title/Title";
import { Typography } from '@mui/material';

export const Home = () => {
	return (
		<main className="">
			<Container>
				<Typography sx={{ textAlign: "center" }} variant="h3" component="h2">Home</Typography>
				<div className={sass.homeInner}>
					<Typography sx={{ textAlign: "center" }} variant="body2" component="p">Design By</Typography>
					<Title title="Bohdan Ryzhko" />
				</div>
			</Container>
		</main>
	)
}
