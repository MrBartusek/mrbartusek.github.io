import ProjectCard from './ProjectCard';

import DokChatImage from '../assets/dokchat.png';
import GifPickerReactImage from '../assets/gif-picker-react.png';
import MeteoalarmCardImage from '../assets/meteoalarm-card.png';
import ClashCalendarImage from '../assets/clash-calendar.png';

function ProjectsList() {
	return (
		<div className="flex flex-col gap-8 my-16">
			<ProjectCard
				title='DokChat'
				subTitle='Website'
				demoLink='https://dokchat.dokurno.dev'
				codeLink='https://github.com/MrBartusek/DokChat'
				imageSrc={DokChatImage}
				description={<>
					DokChat is a comprehensive instant messaging app with group chats, attachments,
					GIFs, and a Desktop app. Supports customization of user profiles and colors of
					groups. Comes with&nbsp;DokChat&nbsp;Desktop&nbsp;-&nbsp;Electron&nbsp;desktop&nbsp;client
				</>}
			/>
			<ProjectCard
				title='gif-picker-react'
				subTitle='Library'
				demoLink='https://dokurno.dev/gif-picker-react/'
				codeLink='https://github.com/MrBartusek/gif-picker-react'
				imageSrc={GifPickerReactImage}
				description={<>
					gif-picker-react is GIF picker component for React applications that features Tenor GIF
					search on and trending categories. Complete with state of the art customization
				</>}
			/>
			<ProjectCard
				title='MeteoalarmCard'
				subTitle='Home Assistant'
				codeLink='https://github.com/MrBartusek/MeteoalarmCard'
				homeAssistantForumLink='https://community.home-assistant.io/t/meteoalarmcard-2-0-weather-warnings-card-for-meteoalarm-meteo-france-environnement-canada-dwd-nina-and-more/438329'
				imageSrc={MeteoalarmCardImage}
				description={<>
					MeteoalarmCard is a powerful yet simple custom card to show meteorological
					warnings card for Home Assistant. It supports wast majority of the core
					integrations as well as custom ones.
				</>}
			/>
			<ProjectCard
				title='ClashCalendar'
				subTitle='Websitet'
				demoLink='https://dokurno.dev/ClashCalendar/'
				codeLink='https://github.com/MrBartusek/ClashCalendar'
				imageSrc={ClashCalendarImage}
				description={<>
					Clash Calendar is easy to use website that integrates League Of Legends
					clashes into Google Calendar. You can select calendar for any region and any tier.
					It will be updated with past, current and upcoming clashes.
				</>}
			/>
		</div>
	);
}

export default ProjectsList;
