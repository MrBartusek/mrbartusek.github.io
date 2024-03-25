import { useEffect } from 'react';
import Router from './components/Router';
import ReactGA from 'react-ga4';

function App() {
	useEffect(() => {
		ReactGA.initialize('G-V1LQFM1HD7');
	}, []);

	return <Router />;
}

export default App;
