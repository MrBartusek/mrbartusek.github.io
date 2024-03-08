import ProjectCard from './ProjectCard';
import DokChatImage from '../assets/dokchat.png';
import GifPickerReactImage from '../assets/gif-picker-react.png';
import StockedUpImage from '../assets/stocked-up.png';
import { useTranslation } from 'react-i18next';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface ProjectsListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

function ProjectsList(props: ProjectsListProps) {
	const { t } = useTranslation();

	return (
		<div {...props} className={classNames('flex flex-col gap-8 my-8', props.className)}>
			<ProjectCard
				title={t('projects.stocked-up.name')}
				subTitle={t('projects.stocked-up.subtitle')}
				demoLink='https://stockedup.dokurno.dev/'
				codeLink='https://github.com/MrBartusek/stocked-up'
				imageSrc={StockedUpImage}
				description={t('projects.stocked-up.description')}
			/>
			<ProjectCard
				title={t('projects.dokchat.name')}
				subTitle={t('projects.dokchat.subtitle')}
				demoLink='https://dokchat.dokurno.dev'
				codeLink='https://github.com/MrBartusek/DokChat'
				imageSrc={DokChatImage}
				description={t('projects.dokchat.description')}
			/>
			<ProjectCard
				title={t('projects.gif-picker-react.name')}
				subTitle={t('projects.gif-picker-react.subtitle')}
				demoLink='https://dokurno.dev/gif-picker-react/'
				codeLink='https://github.com/MrBartusek/gif-picker-react'
				imageSrc={GifPickerReactImage}
				description={t('projects.gif-picker-react.description')}
			/>
		</div>
	);
}

export default ProjectsList;
