import Container from '../Container';
import NavbarNavigation from './NavbarNavigation';
import NavbarLogo from './NavbarLogo';

function Navbar() {
	return (
		<nav>
			<Container>
				<div className='flex py-6 justify-between'>
					<NavbarLogo />
					<NavbarNavigation />
				</div>
			</Container>
		</nav>
	);
}

export default Navbar;
