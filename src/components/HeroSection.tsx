import { Trans, useTranslation } from 'react-i18next';
import Section from './Section';
import SocialDrawer from './SocialDrawer';

function HeroSection() {
	const { t } = useTranslation();

	const universityUrl = (
		<a
			href="https://www.uni.lodz.pl"
			className='styled-link'
			target='_blank'
		/>
	);

	const meteoAlarmUrl = (
		<a
			href="https://github.com/MrBartusek/MeteoalarmCard"
			className='styled-link'
			target='_blank'
		/>
	);

	return (
		<Section id="hero">
			<div className='flex xl:gap-48 lg:gap-16 lg:text-left text-center py-4'>
				<div className='flex-1 flex flex-col justify-center'>
					<h1 className='sm:text-4xl text-3xl text-gray-200 font-semibold mb-8'>
						{t('hero.hello')} {''}
						<span className='text-primary'>
							Bartosz&nbsp;Dokurno
						</span>
					</h1>
					<p className='sm:text-xl text-md sm:leading-8 leading-6'>
						<Trans
							i18nKey={'hero.description'}
							t={t}
							components={{
								username: ( <code className='text-gray-300' /> ),
								meteoalarmUrl: meteoAlarmUrl,
								universityUrl
							}}
						/>
					</p>
					<SocialDrawer />
				</div>
				<div>
					<img
						className='rounded-2xl max-h-80 lg:block hidden shadow-2xl'
						alt='profile picture'
						width={320} height={320}
						src='avatar.webp'
					/>
				</div>
			</div>
		</Section>
	);
}

export default HeroSection;
