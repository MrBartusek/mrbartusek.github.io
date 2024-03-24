import { useTranslation } from 'react-i18next';
import Section from './Section';
import SectionHeading from './SectionHeading';

function AboutMeSection() {
	const { t } = useTranslation();

	return (
		<Section id="skills">
			<SectionHeading subTitle={t('sections.skills.subtitle')}>
				{t('sections.skills.title')}
			</SectionHeading>
			<div className="mt-12 flex flex-col gap-8 lg:flex-row"></div>
		</Section>
	);
}

export default AboutMeSection;
