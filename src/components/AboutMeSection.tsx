import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Section from './Section';
import SectionHeading from './SectionHeading';
import SkillsDrawer from './SkillsDrawer';

function AboutMeSection() {
	const { t } = useTranslation();

	return (
		<Section id="skills">
			<SectionHeading>{t('sections.skills')}</SectionHeading>
			<div className="flex flex-col gap-8 lg:flex-row">
				<div className="m-auto flex max-w-72 flex-shrink-0 items-center">
					<div>
						<img
							className="h-auto w-full rounded-xl"
							alt="profile picture"
							width={384}
							height={468}
							src="https://placehold.co/384x468"
						/>
					</div>
				</div>
				<div>
					<SkillsDrawer className="mb-8 justify-center lg:justify-start" />
					<h2 className="mb-4 text-xl font-bold">{t('about.title')} 💡</h2>
					<p className="mb-6 text-lg">{t('about.description')}</p>
					<Link
						className="text-lg font-bold"
						to="/about"
					>
						{t('about.more')}
					</Link>
				</div>
			</div>
		</Section>
	);
}

export default AboutMeSection;
