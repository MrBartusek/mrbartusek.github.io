import classNames from 'classnames';
import { SKILLS } from '../skills';
import Chip from './Chip';

export interface SkillsDrawerProps {
	className?: string;
}

function SkillsDrawer({ className }: SkillsDrawerProps) {
	return (
		<div className={classNames('flex flex-wrap gap-x-2 gap-y-3', className)}>
			{SKILLS.map((skill, key) => (
				<Chip key={key}>{skill.name}</Chip>
			))}
		</div>
	);
}

export default SkillsDrawer;
