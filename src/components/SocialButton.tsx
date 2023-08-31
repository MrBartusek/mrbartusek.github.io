import classNames from 'classnames';

export interface SocialButtonProps {
    name: string;
    iconSrc: string;
    href: string;
}

function SocialButton({name, iconSrc, href}: SocialButtonProps) {
	return (
		<a
			href={href}
			target='_blank'
			className={classNames(
				'bg-very-washed hover:bg-slate-700 p-3.5',
				'items-center transition-colors rounded-full shadow-md'
			)}>
			<div>
				<img src={iconSrc} alt={`${name} icon`} role='none' width={22} height={22} />
			</div>
		</a>
	);
}

export default SocialButton;
