import { useTranslation } from 'react-i18next';
import Section from './Section';
import SectionHeading from './SectionHeading';

function ProjectsSection() {
	const { t } = useTranslation();

	return (
		<Section id="projects">
			<SectionHeading>{t('sections.projects')}</SectionHeading>
		</Section>
	);
}

export default ProjectsSection;
