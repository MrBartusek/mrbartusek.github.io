import { Link } from 'react-router-dom';
import UnderlineDecoration from '../UnderlineDecoration';

function NavbarLogo() {
	return (
		<Link
			className="flex flex-col text-light hover:text-light"
			to="/"
		>
			<div className="text-2xl font-bold uppercase">dokurno.dev</div>
			<UnderlineDecoration />
		</Link>
	);
}

export default NavbarLogo;
