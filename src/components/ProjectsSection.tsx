import { useTranslation } from 'react-i18next';
import dokchatImage from '../assets/dokchat.png';
import stockedUpImage from '../assets/stocked-up.png';
import ProjectCard from './ProjectCard';
import Section from './Section';
import SectionHeading from './SectionHeading';

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
					url="https://stockedup.dokurno.dev"
					imageSrc={stockedUpImage}
					imageWidth={1365}
					imageHeight={885}
				/>
				<ProjectCard
					name={t('projects.dokchat.name')}
					skills={['Express.js', 'React', 'PostgresSQL', 'Websockets', 'AWS']}
					description={t('projects.dokchat.description')}
					url="https://dokchat.dokurno.dev"
					imageSrc={dokchatImage}
					imageWidth={1300}
					imageHeight={939}
				/>
			</div>
		</Section>
	);
}

export default ProjectsSection;
