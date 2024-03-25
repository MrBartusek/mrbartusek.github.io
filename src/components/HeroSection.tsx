import { Trans, useTranslation } from 'react-i18next';
import Section from './Section';
import SocialChipsDrawer from './SocialChipsDrawer';
import classNames from 'classnames';
import { FaChevronDown } from 'react-icons/fa';

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
					'text-center md:text-left',
				)}
			>
				<div className="flex flex-1 flex-col justify-center">
					<h1 className="mb-8 flex flex-col gap-2 text-4xl md:mb-12 md:gap-3 md:text-6xl">
						<span className="font-semibold text-gray-200">
							{t('hero.hello')}
						</span>
						<span className="font-semibold text-primary">
							Bartosz&nbsp;Dokurno
						</span>
					</h1>

					<p className="mb-16 leading-6 md:text-2xl md:leading-8">
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
