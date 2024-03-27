import React from 'react';
import { RESUME_URL } from '../socialPlatform';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type ParagraphProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLParagraphElement>,
	HTMLParagraphElement
>;
export interface ResumeFinderProps extends ParagraphProps {}

function ResumeFinder(props: ResumeFinderProps) {
	const { t } = useTranslation();

	return (
		<p {...props}>
			{t('common.looking_for_my')}{' '}
			<Link to={RESUME_URL}>{t('navigation.resume')}</Link>?
		</p>
	);
}

export default ResumeFinder;
