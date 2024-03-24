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
					'flex max-w-3xl items-center',
					'h-[calc(75vh-88px)] lg:h-[calc(100vh-88px)]',
				)}
			>
				<div className="flex flex-1 flex-col justify-center">
					<h1 className="mb-12 flex flex-col gap-2 text-3xl sm:gap-3 sm:text-6xl">
						<span className="font-semibold text-gray-200">
							{t('hero.hello')}
						</span>
						<span className="font-semibold text-primary">
							Bartosz&nbsp;Dokurno
						</span>
					</h1>

					<p className="text-md mb-16 leading-6 sm:text-xl sm:leading-8">
						<Trans
							i18nKey={'hero.about'}
							t={t}
							components={{
								username: <code className="text-gray-300" />,
							}}
						/>
					</p>
					<SocialChipsDrawer />
				</div>
			</div>
		</Section>
	);
}

export default HeroSection;
