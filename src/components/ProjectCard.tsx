import React from 'react';
import ChipDrawer from './ChipDrawer';
import Chip from './Chip';
import { BsBoxArrowUpLeft } from 'react-icons/bs';
import Button from './Button';

export interface ProjectCardProps {
	name: string;
	skills: string[];
	description: string;
	url: string;
	image: string;
}

function ProjectCard({
	name,
	skills,
	description,
	url,
	image,
}: ProjectCardProps) {
	return (
		<div className="flex flex-col-reverse justify-between gap-12 lg:flex-row lg:gap-24">
			<div>
				<h4 className="mb-5 text-4xl font-bold md:text-5xl">{name}</h4>
				<ChipDrawer className="mb-8">
					{skills.map((skill, index) => (
						<Chip key={index}>{skill}</Chip>
					))}
				</ChipDrawer>
				<p className="mb-12 text-lg md:text-xl">{description}</p>
				<a href={url}>
					<Button className="flex gap-3 md:px-8 md:py-4 md:text-xl">
						<BsBoxArrowUpLeft />
						View project
					</Button>
				</a>
			</div>
			<div className="m-auto flex max-w-[38rem] flex-shrink-0 lg:w-[30rem]">
				<img
					className="h-auto w-full rounded-xl"
					src={image}
					alt={name}
				/>
			</div>
		</div>
	);
}

export default ProjectCard;
