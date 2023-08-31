import classNames from 'classnames';

export interface SocialChipProps {
    name: string;
	displayName?: string;
    iconSrc: string;
    href: string;
}

function SocialChip({name, displayName, iconSrc, href}: SocialChipProps) {
	return (
		<a
			href={href}
			target='_blank'
			className={classNames(
				'bg-washed hover:bg-very-washed flex gap-3 px-4 py-2.5',
				'items-center transition-colors rounded-xl shadow-md'
			)}>
			<div>
				<img src={iconSrc} alt={`${name} icon`} aria-hidden="true" width={24} height={24} />
			</div>
			{displayName || name}
		</a>
	);
}

export default SocialChip;
