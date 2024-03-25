import { Link, LinkProps } from 'react-router-dom';

export interface NavbarNavigationProps extends LinkProps {}

function FooterNavLink(props: NavbarNavigationProps) {
	return (
		<Link
			className="text-md font-bold"
			{...props}
		/>
	);
}

export default FooterNavLink;
