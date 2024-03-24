import { useTranslation } from 'react-i18next';
import NavbarLink from './NavbarLink';

function NavbarNavigation() {
	const { t } = useTranslation();

	return (
		<nav className="hidden gap-6 sm:flex">
			<NavbarLink elementId="skills">{t('navigation.skills')}</NavbarLink>
			<NavbarLink elementId="projects">{t('navigation.projects')}</NavbarLink>
			<NavbarLink elementId="contact">{t('navigation.contact')}</NavbarLink>
		</nav>
	);
}

export default NavbarNavigation;
