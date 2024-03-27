import classNames from 'classnames';
import React from 'react';

type H2Props = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLHeadingElement>,
	HTMLHeadingElement
>;

export interface AboutHeaderProps extends H2Props {}

function AboutHeader({ className, ...props }: AboutHeaderProps) {
	return (
		<h2
			{...props}
			className={classNames('mb-3 text-2xl font-bold', className)}
		/>
	);
}

export default AboutHeader;
