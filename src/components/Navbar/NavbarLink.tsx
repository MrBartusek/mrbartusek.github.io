export interface NavbarNavigationProps {
    href: string;
    children: React.ReactNode
}

function NavbarLink({ href, children }: NavbarNavigationProps) {
	return (
		<a href={href} className='hover:underline'>
			{children}
		</a>
	);
}

export default NavbarLink;
