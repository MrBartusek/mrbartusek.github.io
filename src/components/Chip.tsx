import classNames from 'classnames';
import React from 'react';

export interface ChipProps {
	children: React.ReactNode;
}

function Chip({ children }: ChipProps) {
	return (
		<div
			className={classNames(
				'text-light rounded-sm bg-dark px-2 py-1.5',
				'text-sm font-semibold',
			)}
		>
			{children}
		</div>
	);
}

export default Chip;
