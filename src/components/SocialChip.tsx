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
				'bg-washed hover:bg-very-washed flex gap-3 px-4 py-2',
				'items-center transition-colors rounded-xl'
			)}>
			<div>
				<img src={iconSrc} alt={name} width={24} height={24} />
			</div>
			{name}
		</a>
	);
}

export default SocialChip;
