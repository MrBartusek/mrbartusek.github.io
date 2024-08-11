import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import i18n from '../i18n';
import { RESUME_URL } from '../data/socialPlatforms';

type ParagraphProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLParagraphElement>,
	HTMLParagraphElement
>;
export interface ResumeFinderProps extends ParagraphProps {}

function ResumeFinder(props: ResumeFinderProps) {
	const { t } = useTranslation();

	return (
		<p {...props}>
			{i18n.language != 'en' && t('common.language_locked')}{' '}
			{t('common.looking_for_my')}{' '}
			<Link to={RESUME_URL}>{t('navigation.resume')}</Link>?
		</p>
	);
}

export default ResumeFinder;
