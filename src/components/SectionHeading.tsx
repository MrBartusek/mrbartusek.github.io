import React from 'react';
import UnderlineDecoration from './UnderlineDecoration';
import classNames from 'classnames';

type DivProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>;
export interface ProjectsSectionProps extends DivProps {}

function SectionHeading({
	children,
	className,
	...props
}: ProjectsSectionProps) {
	return (
		<div
			{...props}
			className={classNames('mb-12 inline-flex flex-col', className)}
		>
			<span className="mb-1 text-4xl font-semibold">{children}</span>
			<UnderlineDecoration />
		</div>
	);
}

export default SectionHeading;
