import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import LinkButton from './LinkButton';
import GitHubIcon from '../assets/github-logo.svg';

const PROJECTS_URL = 'https://github.com/MrBartusek?tab=repositories&q=stars%3A%3E0&type=source&language=&sort=stargazers';

function MoreProjects() {
	const { t } = useTranslation();

	return (
		<div
			className={classNames(
				'bg-washed rounded-xl flex flex-1 text-xl text-center items-center',
				'shadow-lg border border-very-washed p-8 text-gray-300 flex justify-between'
			)}
		>
			{t('projects.more')}
			<LinkButton className='text-lg text-gray-50 bg-green-700'  href={PROJECTS_URL} iconSrc={GitHubIcon}>GitHub</LinkButton>
		</div>
	);
}

export default MoreProjects;
