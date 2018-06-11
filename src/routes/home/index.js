import { h } from 'preact';
import styled from 'styled-components';

const Container = styled.div`
	padding: 56px 20px;
	min-height: 100%;
	width: 100%;
`;

const Home = () => (
	<Container>
		<h1>Home</h1>
		<p>This is the Home component.</p>
	</Container>
);

export default Home;
