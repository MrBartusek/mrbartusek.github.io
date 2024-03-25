import { Link } from 'react-router-dom';

export interface NavbarNavigationProps {
	to: string;
	children: React.ReactNode;
}

function NavbarLink({ children, to }: NavbarNavigationProps) {
	return (
		<Link
			to={to}
			className="text-light hover:text-light hover:underline"
		>
			{children}
		</Link>
	);
}

export default NavbarLink;
