import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import Container from '../Container';
import FooterSocialDrawer from './FooterSocialDrawer';
import FooterContainer from './FooterContainer';
import FooterBrand from './FooterBrand';
import FooterCopyright from './FooterCopyright';
import FooterNavigation from './FooterNavigation';

function Footer() {
	return (
		<FooterContainer className={classNames('flex flex-col gap-6')}>
			<div className="flex justify-between">
				<FooterBrand />
				<FooterNavigation />
				<FooterSocialDrawer />
			</div>
			<FooterCopyright />
		</FooterContainer>
	);
}

export default Footer;
