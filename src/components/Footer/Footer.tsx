import classNames from 'classnames';
import FooterBrand from './FooterBrand';
import FooterContainer from './FooterContainer';
import FooterCopyright from './FooterCopyright';
import FooterNavigation from './FooterNavigation';
import FooterSocialDrawer from './FooterSocialDrawer';

function Footer() {
	return (
		<FooterContainer className={classNames('flex flex-col gap-6')}>
			<div className="flex flex-col justify-between gap-8 sm:flex-row">
				<FooterBrand />
				<FooterNavigation />
				<FooterSocialDrawer />
			</div>
			<FooterCopyright />
		</FooterContainer>
	);
}

export default Footer;
