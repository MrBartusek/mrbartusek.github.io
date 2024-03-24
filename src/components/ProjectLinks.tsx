import { useTranslation } from 'react-i18next';
import GithubIcon from '../assets/github-logo.svg';
import HomeAssistantIcons from '../assets/home-assistant.svg';
import RedirectIcon from '../assets/redirect.svg';
import Button from './LinkButton';

export interface ProjectLinksProps {
	demoLink?: string;
	codeLink?: string;
	homeAssistantForumLink?: string;
}

function ProjectLinks({ demoLink, codeLink, homeAssistantForumLink }: ProjectLinksProps) {
	const { t } = useTranslation();

	return (
		<div className="mt-10 flex flex-wrap justify-center gap-4">
			{demoLink ? (
				<Button
					href={demoLink}
					iconSrc={RedirectIcon}
				>
					{t('common.demo')}
				</Button>
			) : null}
			{homeAssistantForumLink ? (
				<Button
					href={homeAssistantForumLink}
					iconSrc={HomeAssistantIcons}
				>
					Forum
				</Button>
			) : null}
			{codeLink ? (
				<Button
					href={codeLink}
					iconSrc={GithubIcon}
					className="bg-slate-600 hover:bg-slate-700"
				>
					GitHub
				</Button>
			) : null}
		</div>
	);
}

export default ProjectLinks;
