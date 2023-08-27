
export interface ProjectCardProps {
    title: string
	subTitle?: string
    description?: React.ReactNode | string
	href?: string
}

function ProjectCard({ title, description, subTitle, href }: ProjectCardProps) {
	return (
		<a
			className='bg-washed hover:bg-very-washed p-12 rounded-xl transition-colors cursor-pointer'
			href={href}
			target="_blank"
		>
			<h3 className='text-2xl text-center font-bold'>
				{title}
			</h3>
			<div className='text-lg text-primary text-center mb-4'>
				{subTitle}
			</div>
			<div>
				{description}
			</div>
		</a>
	);
}

export default ProjectCard;
