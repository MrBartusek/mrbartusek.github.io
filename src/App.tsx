import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import Router from './components/Router';

function App() {
	useEffect(() => {
		ReactGA.initialize('G-V1LQFM1HD7');
	}, []);

	return <Router />;
}

export default App;
