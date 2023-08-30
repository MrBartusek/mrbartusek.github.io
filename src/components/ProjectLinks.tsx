import { useTranslation } from 'react-i18next';
import GithubIcon from '../assets/github-logo.svg';
import RedirectIcon from '../assets/redirect.svg';
import HomeAssistantIcons from '../assets/home-assistant.svg';
import Button from './LinkButton';

export interface ProjectLinksProps {
    demoLink?: string,
    codeLink?: string,
    homeAssistantForumLink?: string
}

function ProjectLinks({ demoLink, codeLink, homeAssistantForumLink }: ProjectLinksProps) {
	const { t } = useTranslation();

	return (
		<div className='flex flex-wrap justify-center gap-4 mt-10'>
			{demoLink ? (
				<Button
					href={demoLink}
					iconSrc={RedirectIcon}
				>
					{t('common.demo')}
				</Button>
			): null}
			{homeAssistantForumLink ? (
				<Button
					href={homeAssistantForumLink}
					iconSrc={HomeAssistantIcons}
				>
                    Forum
				</Button>
			): null}
			{codeLink ? (
				<Button
					href={codeLink}
					iconSrc={GithubIcon}
					className='bg-slate-600 hover:bg-slate-700'
				>
                    Github
				</Button>
			): null}
		</div>
	);
}

export default ProjectLinks;
