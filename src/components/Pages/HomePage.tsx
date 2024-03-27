import { ScrollRestoration } from 'react-router-dom';
import ContactSection from '../ContactSection';
import HeroSection from '../HeroSection';
import Layout from '../Layout';
import ProjectsSection from '../ProjectsSection';
import SkillsSection from '../SkillsSection';

function HomePage() {
	return (
		<Layout>
			<ScrollRestoration />
			<HeroSection />
			<SkillsSection />
			<ProjectsSection />
			<ContactSection />
		</Layout>
	);
}

export default HomePage;
