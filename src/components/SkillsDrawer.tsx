import classNames from 'classnames';
import { SKILLS } from '../skills';
import Chip from './Chip';
import ChipDrawer from './ChipDrawer';

export interface SkillsDrawerProps {
	className?: string;
}

function SkillsDrawer({ className }: SkillsDrawerProps) {
	return (
		<ChipDrawer className={className}>
			{SKILLS.map((skill, key) => (
				<Chip key={key}>{skill.name}</Chip>
			))}
		</ChipDrawer>
	);
}

export default SkillsDrawer;
