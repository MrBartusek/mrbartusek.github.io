import NavbarLink from './NavbarLink';

function NavbarNavigation() {
	return (
		<div className='gap-4 sm:flex hidden'>
			<NavbarLink href="#about">About</NavbarLink>
			<NavbarLink href="#projects">Projects</NavbarLink>
			<NavbarLink href="#contact">Contact</NavbarLink>
		</div>
	);
}

export default NavbarNavigation;
