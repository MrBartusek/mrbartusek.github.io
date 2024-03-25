import classNames from 'classnames';
import React from 'react';

export interface ChipProps {
	children: React.ReactNode;
	variant?: ChipVariant;
}

export type ChipVariant = 'medium' | 'small';

function Chip({ children, variant = 'small' }: ChipProps) {
	const variantClasses: { [key in ChipVariant]: string } = {
		small: 'px-2 py-1 text-sm',
		medium: 'px-2.5 py-1.5 text-sm',
	};

	return (
		<span
			className={classNames(
				'rounded-sm bg-dark  text-light',
				'cursor-default font-semibold',
				variantClasses[variant],
			)}
		>
			{children}
		</span>
	);
}

export default Chip;
