import ProjectsList from './ProjectsList';
import Section from './Section';
import SectionHeading from './SectionHeading';

function ProjectsSection() {
	return (
		<Section id="projects">
			<SectionHeading upperTitle='Projects'>
                Dig into my work
			</SectionHeading>
			<ProjectsList />
		</Section>
	);
}

export default ProjectsSection;
