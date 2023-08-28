import Container from '../Container';
import NavbarLogo from './NavbarLogo';
import NavbarNavigation from './NavbarNavigation';

function Navbar() {
	return (
		<header>
			<Container>
				<div className='flex py-6 justify-between'>
					<NavbarLogo />
					<NavbarNavigation />
				</div>
			</Container>
		</header>
	);
}

export default Navbar;
