import { useTranslation } from 'react-i18next';
import NavbarLink from './NavbarLink';
import LanguageSelector from '../LanguageSelector';

function NavbarNavigation() {
	const { t } = useTranslation();

	return (
		<nav className='gap-4 sm:flex hidden'>
			<NavbarLink href="#projects">{t('sections.projects.subtitle')}</NavbarLink>
			<NavbarLink href="#contact">{t('sections.contact.subtitle')}</NavbarLink>
			<LanguageSelector />
		</nav>
	);
}

export default NavbarNavigation;
