import { useTranslation } from 'react-i18next';
import NavbarLink from './NavbarLink';

function NavbarNavigation() {
	const { t } = useTranslation();

	return (
		<nav className='gap-6 sm:flex hidden'>
			<NavbarLink elementId="skills">{t('sections.skills.subtitle')}</NavbarLink>
			<NavbarLink elementId="projects">{t('sections.projects.subtitle')}</NavbarLink>
			<NavbarLink elementId="contact">{t('sections.contact.subtitle')}</NavbarLink>
		</nav>
	);
}

export default NavbarNavigation;
