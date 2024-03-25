import classNames from 'classnames';
import React from 'react';

export interface SocialChipProps {
	name: string;
	icon: React.ReactNode;
	url: string;
}

function SocialChip({ name, icon, url }: SocialChipProps) {
	return (
		<a
			href={url}
			target="_blank"
			className={classNames(
				'text-4xl text-primary transition-colors hover:text-gray-400',
			)}
			rel="noreferrer"
			title={name}
		>
			{icon}
		</a>
	);
}

export default SocialChip;
