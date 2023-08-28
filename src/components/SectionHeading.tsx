import React from 'react';

export interface ProjectsSectionProps {
    subTitle: string;
    children?: React.ReactNode;
}

function SectionHeading({ children, subTitle }: ProjectsSectionProps) {
	return (
		<div>
			<h2 className='text-2xl text-primary font-bold text-center'>
				{subTitle}
			</h2>
			<div className='text-4xl text-gray-200 font-semibold text-center'>
				{children}
			</div>

		</div>
	);
}

export default SectionHeading;
