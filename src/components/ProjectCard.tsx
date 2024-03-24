import classNames from 'classnames';
import ProjectLinks from './ProjectLinks';

export interface ProjectCardProps {
	title: string;
	subTitle?: string;
	description?: React.ReactNode | string;
	demoLink?: string;
	codeLink?: string;
	homeAssistantForumLink?: string;
	imageSrc?: string;
}

function ProjectCard({
	title,
	description,
	subTitle,
	demoLink,
	codeLink,
	homeAssistantForumLink,
	imageSrc,
}: ProjectCardProps) {
	return (
		<div className={classNames('flex flex-row gap-8')}>
			<a
				href={demoLink || codeLink}
				target="_blank"
				className={classNames(
					'hidden max-h-96 max-w-[43%] shadow-lg lg:block',
					'rounded-xl border border-very-washed',
				)}
				rel="noreferrer"
			>
				<img
					src={imageSrc}
					alt={`${title} - project image`}
					loading="lazy"
					/* This doesn't really matter here since images are displayed as cover */
					width={1200}
					height={720}
					className="h-full w-full rounded-xl object-cover hover:opacity-80 hover:shadow-2xl"
				/>
			</a>
			<div
				className={classNames(
					'flex flex-1 rounded-xl bg-washed',
					'border border-very-washed shadow-lg',
				)}
			>
				<div className="flex flex-1 items-center justify-center p-6 sm:p-12">
					<div className="flex flex-col items-center">
						<h3 className="text-center text-2xl font-bold">{title}</h3>
						<div className="mb-4 text-center text-lg font-bold text-primary">{subTitle}</div>
						<div className="text-center lg:text-left">{description}</div>
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
