import { useTranslation } from 'react-i18next';
import FooterNavLink from './FooterNavLink';

function FooterNavigation() {
	const { t } = useTranslation();
	return (
		<div>
			<h5 className="text-xl font-semibold">{t('footer.navigation')}</h5>
			<nav className="flex flex-col flex-wrap gap-x-12 gap-y-3 py-2 lg:max-h-32">
				<FooterNavLink to="/">{t('navigation.home')}</FooterNavLink>
				<FooterNavLink to="/about">{t('navigation.about')}</FooterNavLink>
				<FooterNavLink to="/contact">{t('navigation.contact')}</FooterNavLink>
				<FooterNavLink
					to="https://github.com/MrBartusek/mrbartusek.github.io"
					target="_blank"
				>
					{t('navigation.source')}
				</FooterNavLink>
			</nav>
		</div>
	);
}

export default FooterNavigation;
