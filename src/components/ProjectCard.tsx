import classNames from 'classnames';
import ProjectLinks from './ProjectLinks';

export interface ProjectCardProps {
    title: string
	subTitle?: string
    description?: React.ReactNode | string
	demoLink?: string
	codeLink?: string
	homeAssistantForumLink?: string
	imageSrc?: string;
}

function ProjectCard({ title, description, subTitle, demoLink, codeLink, homeAssistantForumLink, imageSrc }: ProjectCardProps) {
	return (
		<div className={classNames('flex gap-8 flex-row')}>
			<img
				src={imageSrc}
				alt={`${title} - project image`}
				loading="lazy"

				/* This doesn't really matter here since images are displayed as cover */
				width={1200}
				height={720}

				className={classNames(
					'object-cover shadow-lg max-w-[45%]  lg:block hidden',
					'border border-very-washed rounded-xl'
				)}
			/>
			<div
				className={classNames(
					'bg-washed rounded-xl flex flex-1',
					'shadow-lg border border-very-washed'
				)}
			>
				<div className="sm:p-12 p-6 flex flex-1 items-center justify-center">
					<div className='flex flex-col items-center'>
						<h3 className='text-2xl text-center font-bold'>
							{title}
						</h3>
						<div className='text-lg text-primary text-center mb-4 font-bold'>
							{subTitle}
						</div>
						<div className='text-center lg:text-left'>
							{description}
						</div>
						<ProjectLinks
							demoLink={demoLink}
							codeLink={codeLink}
							homeAssistantForumLink={homeAssistantForumLink}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
