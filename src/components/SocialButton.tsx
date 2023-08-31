import classNames from 'classnames';
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

type LinkProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export interface SocialButtonProps extends LinkProps {
    name: string;
    iconSrc: string;
    href: string;
}

function SocialButton({href, iconSrc, name, ...props}: SocialButtonProps) {
	return (
		<a
			{...props}
			href={href}
			target='_blank'
			className={classNames(
				'bg-very-washed hover:bg-slate-700 p-3.5',
				'items-center transition-colors rounded-full shadow-md'
			)}>
			<div>
				<img src={iconSrc} alt={`${name} icon`} aria-hidden="true" width={22} height={22} />
			</div>
		</a>
	);
}

export default SocialButton;
