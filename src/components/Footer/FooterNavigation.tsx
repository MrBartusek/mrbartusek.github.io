import { useTranslation } from 'react-i18next';
import FooterNavLink from './FooterNavLink';

function FooterNavigation() {
	const { t } = useTranslation();
	return (
		<div>
			<h5 className="text-xl font-semibold">{t('footer.navigation')}</h5>
			<nav className="flex flex-col gap-1 py-2">
				<FooterNavLink>{t('navigation.projects')}</FooterNavLink>
				<FooterNavLink>{t('navigation.skills')}</FooterNavLink>
				<FooterNavLink>{t('navigation.contact')}</FooterNavLink>
			</nav>
		</div>
	);
}

export default FooterNavigation;
