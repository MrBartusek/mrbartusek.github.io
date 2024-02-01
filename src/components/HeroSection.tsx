import { Trans, useTranslation } from 'react-i18next';
import Section from './Section';
import SocialChipsDrawer from './SocialChipsDrawer';
import classNames from 'classnames';

function HeroSection() {
	const { t } = useTranslation();

	return (
		<Section id="hero">
			<div className={classNames(
				'flex xl:gap-48 lg:gap-24 lg:text-left text-center items-center',
				'lg:h-[75vh]'
			)}>
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
								username: ( <code className='text-gray-300' /> )}}
						/>
					</p>
					<SocialChipsDrawer />
				</div>
				<div>
					<img
						className='rounded-2xl xl:max-h-80 max-h-72 lg:block hidden shadow-2xl mb-8 w-auto'
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
