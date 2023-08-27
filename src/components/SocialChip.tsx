import classNames from 'classnames';

export interface SocialChipProps {
    name: string;
    iconSrc: string;
    href: string;
}

function SocialChip({name, iconSrc, href}: SocialChipProps) {
	return (
		<a
			href={href}
			target='_blank'
			className={classNames(
				'bg-gray-800 rounded-xl flex gap-3 px-4 py-2 items-center',
				'hover:bg-gray-700 transition-colors'
			)}>
			<div>
				<img src={iconSrc} width={24} height={24} />
			</div>
			{name}
		</a>
	);
}

export default SocialChip;
