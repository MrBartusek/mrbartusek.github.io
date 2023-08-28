import { useTranslation } from 'react-i18next';
import ProjectsList from './ProjectsList';
import Section from './Section';
import SectionHeading from './SectionHeading';

function ProjectsSection() {
	const { t } = useTranslation();

	return (
		<Section id="projects">
			<SectionHeading subTitle={t('sections.projects.subtitle')}>
				{t('sections.projects.title')}
			</SectionHeading>
			<ProjectsList />
		</Section>
	);
}

export default ProjectsSection;
