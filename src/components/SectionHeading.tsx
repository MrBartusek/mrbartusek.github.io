import React from 'react';
import UnderlineDecoration from './UnderlineDecoration';

export interface ProjectsSectionProps {
	children?: React.ReactNode;
}

function SectionHeading({ children }: ProjectsSectionProps) {
	return (
		<div className="mb-12 inline-flex flex-col">
			<span className="text-4xl font-semibold">{children}</span>
			<UnderlineDecoration />
		</div>
	);
}

export default SectionHeading;
