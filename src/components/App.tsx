import HeroSection from './HeroSection';
import Navbar from './Navbar/Navbar';
import ProjectsSection from './ProjectsSection';
import Footer from './Footer';
import ReactGA from 'react-ga4';

import './App.css';
import { useEffect } from 'react';

function App() {

	useEffect(() => {
		ReactGA.initialize('G-V1LQFM1HD7');
	}, [ ]);
	return (
		<>
			<Navbar />
			<HeroSection />
			<ProjectsSection />
			<p className='text-lg text-center pb-16 text-gray-400'>
				- This website is still in progress, there is more to come -
			</p>
			<Footer />
		</>
	);
}

export default App;
