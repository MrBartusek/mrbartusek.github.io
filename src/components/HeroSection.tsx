import { Trans, useTranslation } from 'react-i18next';
import Section from './Section';
import SocialChipsDrawer from './SocialChipsDrawer';
import classNames from 'classnames';

function HeroSection() {
	const { t } = useTranslation();

	return (
		<Section
			id="hero"
			className="text-light bg-dark"
			disablePadding
		>
			<div
				className={classNames(
					'flex items-center text-center lg:gap-24 lg:text-left xl:gap-48',
					'h-[calc(75vh-88px)] lg:h-[calc(100vh-88px)]',
				)}
			>
				<div className="flex flex-1 flex-col justify-center">
					<h1 className="mb-8 flex flex-col gap-2 text-3xl sm:gap-3 sm:text-5xl">
						<span className="font-semibold text-gray-200">{t('hero.hello')}</span>
						<span className="font-semibold text-primary">Bartosz&nbsp;Dokurno</span>
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
