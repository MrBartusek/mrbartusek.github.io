import HeroSection from './HeroSection';
import Navbar from './Navbar/Navbar';
import './App.css';
import ProjectsSection from './ProjectsSection';
import Footer from './Footer';

function App() {
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
