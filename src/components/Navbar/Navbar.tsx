import Container from '../Container';
import LanguageSelector from '../LanguageSelector';
import NavbarLogo from './NavbarLogo';
import NavbarNavigation from './NavbarNavigation';

function Navbar() {
	return (
		<header>
			<Container>
				<div className='flex py-6 justify-between'>
					<NavbarLogo />
					<div className='flex flex-row items-center'>
						<NavbarNavigation />
						<LanguageSelector />
					</div>
				</div>
			</Container>
		</header>
	);
}

export default Navbar;
