import Container from '../Container';
import LanguageSelector from '../LanguageSelector';
import NavbarLogo from './NavbarLogo';
import NavbarNavigation from './NavbarNavigation';

function Navbar() {
	return (
		<header className="bg-dark text-light">
			<Container>
				<div className="flex justify-between py-6">
					<NavbarLogo />
					<div className="flex flex-row items-center">
						<NavbarNavigation />
						<LanguageSelector />
					</div>
				</div>
			</Container>
		</header>
	);
}

export default Navbar;
