import { SKILLS } from '../data/skills';
import Chip from './Chip';
import ChipDrawer from './ChipDrawer';

export interface SkillsDrawerProps {
	className?: string;
}

function SkillsDrawer({ className }: SkillsDrawerProps) {
	return (
		<ChipDrawer className={className}>
			{SKILLS.map((skill, key) => (
				<Chip
					key={key}
					variant="medium"
				>
					{skill.name}
				</Chip>
			))}
		</ChipDrawer>
	);
}

export default SkillsDrawer;
