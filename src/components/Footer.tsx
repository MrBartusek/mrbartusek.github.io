import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import Container from './Container';
import SocialButtonDrawer from './SocialButtonDrawer';

function Footer() {
	const { t } = useTranslation();

	return (
		<footer className="text-light border-t border-black bg-dark">
			<Container>
				<div
					className={classNames(
						'flex items-center justify-between py-8 text-gray-300',
						'flex-col-reverse gap-6 text-center lg:flex-row lg:text-left',
					)}
				>
					<div>
						<div>
							{t('footer.handcrafted_by')} -{' '}
							<a
								href="https://dokurno.dev"
								className="styled-link"
							>
								MrBartusek
							</a>{' '}
							{t('footer.with')}{' '}
							<a
								href="https://react.dev/"
								target="_blank"
								className="styled-link"
								rel="noreferrer"
							>
								React
							</a>{' '}
							&{' '}
							<a
								href="https://tailwindcss.com/"
								target="_blank"
								className="styled-link"
								rel="noreferrer"
							>
								Tailwind CSS
							</a>
						</div>
						<div className="pt-2">Bartosz Dokurno © {new Date().getFullYear()}</div>
					</div>
					<SocialButtonDrawer />
				</div>
			</Container>
		</footer>
	);
}

export default Footer;
