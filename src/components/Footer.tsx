import { useTranslation } from 'react-i18next';
import Container from './Container';
import SocialButtonDrawer from './SocialButtonDrawer';
import classNames from 'classnames';

function Footer() {
	const { t } = useTranslation();

	return (
		<footer className='border-very-washed border-t border-solid bg-washed'>
			<Container>
				<div className={classNames(
					'py-8 text-gray-300 flex justify-between items-center',
					'flex-col-reverse lg:flex-row gap-6 text-center lg:text-left'
				)}>
					<div>
						<div>
							{t('footer.handcrafted_by')} - <a href='https://dokurno.dev' className='styled-link'>MrBartusek</a> {' '}
							{t('footer.with')} <a href='https://react.dev/' target='_blank' className='styled-link'>React</a> & {' '}
							<a href='https://tailwindcss.com/' target='_blank' className='styled-link'>TailwindCSS</a>
						</div>
						<div className='pt-2'>
							Bartosz Dokurno © {new Date().getFullYear()}
						</div>
					</div>
					<SocialButtonDrawer />
				</div>
			</Container>
		</footer>
	);
}

export default Footer;
