import { useTranslation } from 'react-i18next';
import Section from './Section';
import SectionHeading from './SectionHeading';
import Chip from './Chip';
import ChipDrawer from './ChipDrawer';
import Button from './Button';
import { BsBoxArrowUpLeft } from 'react-icons/bs';

function ProjectsSection() {
	const { t } = useTranslation();

	return (
		<Section id="projects">
			<SectionHeading>{t('sections.projects')}</SectionHeading>
			<div className="flex justify-between gap-28">
				<div>
					<h4 className="mb-4 text-3xl font-bold">
						StockedUp - Inventory Management System
					</h4>
					<ChipDrawer className="mb-6">
						<Chip>React</Chip>
						<Chip>Nest.js</Chip>
						<Chip>Mongo</Chip>
					</ChipDrawer>
					<p className="mb-12 text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
						vel incidunt minima. Magni ad odio tempora facilis molestiae
						ratione, quaerat provident corrupti saepe quod expedita obcaecati
						cum ipsum velit ducimus.
					</p>
					<Button className="flex gap-3 text-xl">
						<BsBoxArrowUpLeft />
						View project
					</Button>
				</div>
				<div className="w-96 flex-shrink-0">
					<img
						className="h-auto w-full rounded-2xl"
						src="https://placehold.co/1280x720"
					/>
				</div>
			</div>
		</Section>
	);
}

export default ProjectsSection;
