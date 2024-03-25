export interface NavbarNavigationProps {
	children: React.ReactNode;
}

function FooterNavLink({ children }: NavbarNavigationProps) {
	return <a className="text-md font-bold">{children}</a>;
}

export default FooterNavLink;
