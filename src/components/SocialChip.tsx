import classNames from 'classnames';
import React from 'react';

export interface SocialChipProps {
	name: string;
	icon: React.ReactNode;
	url: string;
	variant?: SocialChipVariant;
}

export type SocialChipVariant = 'big' | 'medium';

function SocialChip({ name, icon, url, variant = 'medium' }: SocialChipProps) {
	const variantClasses: { [key in SocialChipVariant]: string } = {
		big: 'text-3xl lg:text-4xl',
		medium: 'text-3xl',
	};

	return (
		<a
			href={url}
			target="_blank"
			className={classNames(
				'text-primary shadow-xl transition-colors hover:text-gray-400',
				variantClasses[variant],
			)}
			rel="noreferrer"
			title={name}
		>
			{icon}
		</a>
	);
}

export default SocialChip;
