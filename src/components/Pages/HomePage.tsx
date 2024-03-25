import AboutMeSection from '../AboutMeSection';
import ContactSection from '../ContactSection';
import HeroSection from '../HeroSection';
import Layout from '../Layout';
import ProjectsSection from '../ProjectsSection';

function HomePage() {
	return (
		<Layout>
			<HeroSection />
			<AboutMeSection />
			<ProjectsSection />
			<ContactSection />
		</Layout>
	);
}

export default HomePage;
