import classNames from 'classnames';
import React from 'react';

type DivProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>;

export interface AboutSectionProps extends DivProps {}

function AboutSection({ className, ...props }: AboutSectionProps) {
	return (
		<div
			{...props}
			className={classNames('mb-8', className)}
		/>
	);
}

export default AboutSection;
