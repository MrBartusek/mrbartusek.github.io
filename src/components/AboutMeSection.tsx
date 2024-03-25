import { useTranslation } from 'react-i18next';
import Section from './Section';
import SectionHeading from './SectionHeading';
import SkillsDrawer from './SkillsDrawer';

function AboutMeSection() {
	const { t } = useTranslation();

	return (
		<Section id="skills">
			<SectionHeading>{t('sections.skills')}</SectionHeading>
			<div className="flex gap-8">
				<div className="flex w-72 flex-shrink-0 items-center">
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
					<SkillsDrawer className="mb-8" />
					<h3 className="mb-4 text-lg font-bold">{t('about.title')} 💡</h3>
					<p className="mb-6 text-lg">{t('about.description')}</p>
					<a className="text-lg font-bold">Dig deeper into my bio</a>
				</div>
			</div>
		</Section>
	);
}

export default AboutMeSection;
