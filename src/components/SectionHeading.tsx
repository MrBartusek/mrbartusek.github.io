import classNames from 'classnames';
import React from 'react';
import UnderlineDecoration from './UnderlineDecoration';

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
		<h2
			{...props}
			className={classNames(
				'mb-12 inline-flex flex-col text-4xl font-semibold',
				className,
			)}
		>
			<span className="mb-1 ">{children}</span>
			<UnderlineDecoration />
		</h2>
	);
}

export default SectionHeading;
