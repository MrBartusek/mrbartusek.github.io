import HeroSection from './HeroSection';
import Navbar from './Navbar/Navbar';
import ProjectsSection from './ProjectsSection';
import Footer from './Footer';
import ReactGA from 'react-ga4';

import './App.css';
import { useEffect } from 'react';
import ContactSection from './ContactSecion';

function App() {

	useEffect(() => {
		ReactGA.initialize('G-V1LQFM1HD7');
	}, [ ]);
	return (
		<>
			<Navbar />
			<main>
				<HeroSection />
				<ProjectsSection />
				<ContactSection />
			</main>
			<Footer />
		</>
	);
}

export default App;
