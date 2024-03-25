export interface NavbarNavigationProps {
	elementId: string;
	children: React.ReactNode;
}

function NavbarLink({ elementId, children }: NavbarNavigationProps) {
	function handleClick() {
		const element = document.getElementById(elementId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
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
