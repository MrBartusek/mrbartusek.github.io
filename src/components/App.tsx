import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import './App.css';
import ContactSection from './ContactSection';
import Footer from './Footer';
import HeroSection from './HeroSection';
import Navbar from './Navbar/Navbar';
import AboutMeSection from './AboutMeSection';

function App() {
	useEffect(() => {
		ReactGA.initialize('G-V1LQFM1HD7');
	}, []);
	return (
		<>
			<Navbar />
			<main className="pb-24">
				<HeroSection />
				<AboutMeSection />
				<ContactSection />
			</main>
			<Footer />
		</>
	);
}

export default App;
