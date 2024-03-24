import { useTranslation } from 'react-i18next';
import NavbarLink from './NavbarLink';

function NavbarNavigation() {
	const { t } = useTranslation();

	return (
		<nav className="hidden gap-6 sm:flex">
			<NavbarLink elementId="skills">{t('sections.skills')}</NavbarLink>
			<NavbarLink elementId="projects">{t('sections.projects')}</NavbarLink>
			<NavbarLink elementId="contact">{t('sections.contact')}</NavbarLink>
		</nav>
	);
}

export default NavbarNavigation;
