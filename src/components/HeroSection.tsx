import { Trans, useTranslation } from 'react-i18next';
import Section from './Section';
import SocialChipsDrawer from './SocialChipsDrawer';
import classNames from 'classnames';

function HeroSection() {
	const { t } = useTranslation();

	return (
		<Section id="hero">
			<div
				className={classNames(
					'flex items-center text-center lg:gap-24 lg:text-left xl:gap-48',
					'lg:h-[75vh]',
				)}
			>
				<div className="flex flex-1 flex-col justify-center">
					<h1 className="mb-8 text-3xl font-semibold text-gray-200 sm:text-4xl">
						{t('hero.hello')} {''}
						<span className="text-primary">Bartosz&nbsp;Dokurno</span>
					</h1>
					<p className="text-md leading-6 sm:text-xl sm:leading-8">
						<Trans
							i18nKey={'hero.description'}
							t={t}
							components={{
								username: <code className="text-gray-300" />,
							}}
						/>
					</p>
					<SocialChipsDrawer />
				</div>
				<div>
					<img
						className="mb-8 hidden max-h-72 w-auto rounded-2xl shadow-2xl lg:block xl:max-h-80"
						alt="profile picture"
						width={320}
						height={320}
						src="avatar.webp"
					/>
				</div>
			</div>
		</Section>
	);
}

export default HeroSection;
