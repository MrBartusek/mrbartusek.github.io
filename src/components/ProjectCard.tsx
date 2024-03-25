import { useTranslation } from 'react-i18next';
import { BsBoxArrowUpLeft } from 'react-icons/bs';
import Button from './Button';
import Chip from './Chip';
import ChipDrawer from './ChipDrawer';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

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
	const { t } = useTranslation();

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
				<Link
					to={url}
					target="_blank"
				>
					<Button className="flex gap-3 md:px-8 md:py-4 md:text-xl">
						<BsBoxArrowUpLeft />
						{t('common.view_project')}
					</Button>
				</Link>
			</div>
			<div className="m-auto flex max-w-[38rem] flex-shrink-0 lg:w-[30rem]">
				<Link
					to={url}
					target="_blank"
					className={classNames(
						'rounded-xl  transition-all ',
						'shadow-sm hover:-translate-y-3 hover:shadow-xl',
					)}
				>
					<img
						className="h-auto w-full rounded-xl"
						src={image}
						alt={name}
					/>
				</Link>
			</div>
		</div>
	);
}

export default ProjectCard;
