import React from 'react';

export interface ProjectsSectionProps {
	subTitle: string;
	children?: React.ReactNode;
}

function SectionHeading({ children, subTitle }: ProjectsSectionProps) {
	return (
		<div>
			<h2 className="text-center text-2xl font-bold text-primary">{subTitle}</h2>
			<div className="text-center text-4xl font-semibold ">{children}</div>
		</div>
	);
}

export default SectionHeading;
