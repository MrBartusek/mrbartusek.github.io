import { useTranslation } from 'react-i18next';
import NavbarLink from './NavbarLink';

function NavbarNavigation() {
	const { t } = useTranslation();

	return (
		<nav className="hidden gap-6 sm:flex">
			<NavbarLink to="about">{t('navigation.about')}</NavbarLink>
			<NavbarLink elementId="contact">{t('navigation.contact')}</NavbarLink>
		</nav>
	);
}

export default NavbarNavigation;
