import { Trans, useTranslation } from 'react-i18next';
import ProjectsList from './ProjectsList';
import Section from './Section';
import SectionHeading from './SectionHeading';

function ProjectsSection() {
	const { t } = useTranslation();

	return (
		<Section id="projects">
			<SectionHeading subTitle={t('sections.projects.subtitle')}>
				{t('sections.projects.title')}
			</SectionHeading>
			<ProjectsList />
			<div className='text-gray-400 text-center text-lg'>
				<Trans
					t={t}
					i18nKey={'projects.more'}
					components={{
						github: (
							<a
								href="https://github.com/MrBartusek"
								className='text-gray-300 underline'
								target='_blank'
							/>
						)
					}}
				/>
			</div>
		</Section>
	);
}

export default ProjectsSection;
