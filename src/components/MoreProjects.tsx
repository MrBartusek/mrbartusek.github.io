import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import GitHubIcon from '../assets/github-logo.svg';
import LinkButton from './LinkButton';

const PROJECTS_URL =
	'https://github.com/MrBartusek?tab=repositories&q=stars%3A%3E0&type=source&language=&sort=stargazers';

function MoreProjects() {
	const { t } = useTranslation();

	return (
		<div
			className={classNames(
				'flex flex-1 items-center rounded-xl bg-washed text-center text-xl',
				'flex justify-between border border-very-washed text-gray-300 shadow-lg',
				'flex-col gap-8 p-8 sm:p-12 lg:flex-row',
			)}
		>
			{t('projects.more')}
			<LinkButton
				className="bg-green-700 text-lg text-gray-50 hover:bg-green-800"
				href={PROJECTS_URL}
				iconSrc={GitHubIcon}
			>
				GitHub
			</LinkButton>
		</div>
	);
}

export default MoreProjects;
