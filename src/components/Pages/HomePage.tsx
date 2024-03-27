import { ScrollRestoration } from 'react-router-dom';
import ContactSection from '../ContactSection';
import HeroSection from '../HeroSection';
import Layout from '../Layout';
import ProjectsSection from '../ProjectsSection';
import SkillsSection from '../SkillsSection';
import { Helmet } from 'react-helmet';

function HomePage() {
	return (
		<Layout>
			<ScrollRestoration />
			<Helmet>
				<title>Bartosz Dokurno | Web Developer</title>
			</Helmet>
			<HeroSection />
			<SkillsSection />
			<ProjectsSection />
			<ContactSection />
		</Layout>
	);
}

export default HomePage;
