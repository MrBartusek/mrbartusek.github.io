import { useTranslation } from 'react-i18next';
import LaptopIcon from '../assets/laptop.svg';
import ServerIcon from '../assets/server.svg';
import WrenchIcon from '../assets/wrench.svg';
import { SKILLS } from '../skills';
import Section from './Section';
import SectionHeading from './SectionHeading';
import SkillCard from './SkillCard';

function SkillSection() {
	const { t } = useTranslation();

	return (
		<Section id="skills">
			<SectionHeading subTitle={t('sections.skills.subtitle')}>
				{t('sections.skills.title')}
			</SectionHeading>
			<div className="mt-12 flex flex-col gap-8 lg:flex-row">
				<SkillCard
					icon={LaptopIcon}
					title={t('skills.frontend')}
					className="bg-blue-700"
					skills={SKILLS.frontend}
				/>
				<SkillCard
					icon={ServerIcon}
					title={t('skills.backend')}
					className="bg-violet-700"
					skills={SKILLS.backend}
				/>
				<SkillCard
					icon={WrenchIcon}
					title={t('skills.other')}
					className="bg-green-700"
					skills={SKILLS.other}
				/>
			</div>
		</Section>
	);
}

export default SkillSection;
