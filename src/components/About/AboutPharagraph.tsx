import classNames from 'classnames';
import React from 'react';

type ParagraphProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLParagraphElement>,
	HTMLParagraphElement
>;

export interface AboutParagraphProps extends ParagraphProps {}

function AboutParagraph({ className, ...props }: AboutParagraphProps) {
	return (
		<p
			{...props}
			className={classNames('mb-4 text-lg', className)}
		/>
	);
}

export default AboutParagraph;
