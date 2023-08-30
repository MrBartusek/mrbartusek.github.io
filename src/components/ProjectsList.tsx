import ProjectCard from './ProjectCard';

import DokChatImage from '../assets/dokchat.png';
import GifPickerReactImage from '../assets/gif-picker-react.png';
import MeteoalarmCardImage from '../assets/meteoalarm-card.png';
import ClashCalendarImage from '../assets/clash-calendar.png';
import { useTranslation } from 'react-i18next';

function ProjectsList() {
	const { t } = useTranslation();

	return (
		<div className="flex flex-col gap-8 my-16">
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
			<ProjectCard
				title={t('projects.meteoalarm-card.name')}
				subTitle={t('projects.meteoalarm-card.subtitle')}
				codeLink='https://github.com/MrBartusek/MeteoalarmCard'
				homeAssistantForumLink='https://community.home-assistant.io/t/meteoalarmcard-2-0-weather-warnings-card-for-meteoalarm-meteo-france-environnement-canada-dwd-nina-and-more/438329'
				imageSrc={MeteoalarmCardImage}
				description={t('projects.meteoalarm-card.description')}
			/>
			<ProjectCard
				title={t('projects.clash-calendar.name')}
				subTitle={t('projects.clash-calendar.subtitle')}
				demoLink='https://dokurno.dev/ClashCalendar/'
				codeLink='https://github.com/MrBartusek/ClashCalendar'
				imageSrc={ClashCalendarImage}
				description={t('projects.clash-calendar.description')}
			/>
		</div>
	);
}

export default ProjectsList;
