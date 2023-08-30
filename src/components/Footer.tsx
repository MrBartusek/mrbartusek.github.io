import { useTranslation } from 'react-i18next';
import Container from './Container';

function Footer() {
	const { t } = useTranslation();

	return (
		<footer className='border-very-washed border-t border-solid'>
			<Container>
				<div className='py-8 text-gray-300 flex justify-between items-center'>
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
					<div>
						<a href="https://github.com/MrBartusek" target='blank' className='underline'>GitHub</a>
						{' • '}
						<a href="https://www.linkedin.com/in/bartosz-dokurno/" target='blank' className='underline'>Linkedin</a>
						{' • '}
						<a href="https://discordapp.com/users/212988300137463809" target='blank' className='underline'>Discord</a>
						{' • '}
						<a href="mailto:bartosz@dokurno.dev" target='blank' className='underline'>E-Mail</a>
					</div>
				</div>
			</Container>
		</footer>
	);
}

export default Footer;
