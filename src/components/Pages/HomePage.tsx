import { ScrollRestoration } from 'react-router-dom';
import SkillsSection from '../SkillsSection';
import ContactSection from '../ContactSection';
import HeroSection from '../HeroSection';
import Layout from '../Layout';
import ProjectsSection from '../ProjectsSection';

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
