import { ScrollRestoration } from 'react-router-dom';
import AboutMeSection from '../AboutMeSection';
import ContactSection from '../ContactSection';
import HeroSection from '../HeroSection';
import Layout from '../Layout';
import ProjectsSection from '../ProjectsSection';

function HomePage() {
	return (
		<Layout>
			<ScrollRestoration />
			<HeroSection />
			<AboutMeSection />
			<ProjectsSection />
			<ContactSection />
		</Layout>
	);
}

export default HomePage;
