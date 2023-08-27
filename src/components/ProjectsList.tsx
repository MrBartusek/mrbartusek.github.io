import ProjectCard from './ProjectCard';

function ProjectsList() {
	return (
		<div className="grid grid-cols-2 gap-8 my-16">
			<ProjectCard
				title='DokChat'
				subTitle='Instant Messaging'
				href='https://dokchat.dokurno.dev'
				description={<>
					DokChat is a comprehensive instant messaging app with group chats, attachments,
					GIFs, and a Desktop app. Features a custom JWT-based authentication system.
					Deployed on AWS using Docker and Terraform.
				</>}
			/>
			<ProjectCard
				title='MeteoalarmCard'
				subTitle='Home Assistant'
				href='https://github.com/MrBartusek/MeteoalarmCard'
				description={<>
					MeteoalarmCard is a powerful yet simple custom card to show meteorological
					warnings card for <a className='styled-link' href="https://www.home-assistant.io">Home Assistant</a>.
					It supports wast majority of the core integrations as well as custom ones.
				</>}
			/>
			<ProjectCard
				title='gif-picker-react'
				subTitle='React'
				href='https://dokurno.dev/gif-picker-react/'
				description={<>
					Tenor GIF picker component for React applications that runs on Tenor API V2.
				</>}
			/>
		</div>
	);
}

export default ProjectsList;
