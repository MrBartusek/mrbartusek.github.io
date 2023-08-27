import Container from './Container';
import ProjectsList from './ProjectsList';
import SectionHeading from './SectionHeading';

function ProjectsSection() {
	return (
		<Container id="projects">
			<div className='my-32'>
				<SectionHeading upperTitle='Projects'>
                    Dig into my work
				</SectionHeading>
				<ProjectsList />
			</div>
		</Container>
	);
}

export default ProjectsSection;
