import { injectGlobal } from 'styled-components';
injectGlobal`
	html, body {
		height: 100%;
		width: 100%;
		padding: 0;
		margin: 0;
		background: #FAFAFA;
		font-family: 'Helvetica Neue', arial, sans-serif;
		font-weight: 400;
		color: #444;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	* {
		box-sizing: border-box;
	}

	#app {
		height: 100%;
	}
	.activeLink {
		background: rgba(0, 0, 0, 0.4);
	}
`;
