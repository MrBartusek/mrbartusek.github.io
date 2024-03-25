import { useNavigate } from 'react-router-dom';

export interface NavbarNavigationProps {
	elementId?: string;
	to?: string;
	children: React.ReactNode;
}

function NavbarLink({ elementId, children, to }: NavbarNavigationProps) {
	const navigate = useNavigate();

	function handleClick() {
		const element = document.getElementById(elementId || '');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		} else if (to) {
			navigate(to);
		}
	}
	return (
		<button
			onClick={handleClick}
			className="hover:underline"
		>
			{children}
		</button>
	);
}

export default NavbarLink;
