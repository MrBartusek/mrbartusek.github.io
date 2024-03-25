import classNames from 'classnames';
import { Trans, useTranslation } from 'react-i18next';
import HeroSocialDrawer from './HeroSocialDrawer';
import Section from './Section';

function HeroSection() {
	const { t } = useTranslation();

	return (
		<Section
			id="hero"
			className="bg-dark text-light"
			disablePadding
		>
			<div
				className={classNames(
					'flex max-w-3xl items-center',
					'h-[calc(75vh-88px)] lg:h-[calc(100vh-88px)]',
					'text-center lg:text-left',
				)}
			>
				<div className="flex flex-1 flex-col justify-center">
					<h1
						className={classNames(
							'mb-8 flex flex-col gap-2  md:mb-12 md:gap-3',
							'text-4xl sm:text-5xl xl:text-6xl',
						)}
					>
						<span className="font-semibold text-gray-200">
							{t('hero.hello')}
						</span>
						<span className="font-semibold text-primary">
							Bartosz&nbsp;Dokurno
						</span>
					</h1>

					<p className="mb-16 leading-6 sm:text-xl md:text-2xl md:leading-8">
						<Trans
							i18nKey={'hero.about'}
							t={t}
							components={{
								username: <code className="text-gray-300" />,
							}}
						/>
					</p>
					<HeroSocialDrawer />
				</div>
			</div>
		</Section>
	);
}

export default HeroSection;
