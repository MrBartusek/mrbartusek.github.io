import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';
import Section from './Section';
import SectionHeading from './SectionHeading';
import stockedUpImage from '../assets/stocked-up.png';
import dokchatImage from '../assets/dokchat.png';

function ProjectsSection() {
	const { t } = useTranslation();

	return (
		<Section id="projects">
			<SectionHeading>{t('sections.projects')}</SectionHeading>
			<div className="flex flex-col gap-40 py-12">
				<ProjectCard
					name={t('projects.stocked-up.name')}
					skills={['Nest.js', 'React', 'MongoDB', 'Redis', 'AWS']}
					description={t('projects.stocked-up.description')}
					image={stockedUpImage}
					url="https://stockedup.dokurno.dev"
				/>
				<ProjectCard
					name={t('projects.dokchat.name')}
					skills={['Express.js', 'React', 'PostgresSQL', 'Websockets', 'AWS']}
					description={t('projects.dokchat.description')}
					image={dokchatImage}
					url="https://dokchat.dokurno.dev"
				/>
			</div>
		</Section>
	);
}

export default ProjectsSection;
