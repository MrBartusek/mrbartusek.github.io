import classNames from 'classnames';
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

type LinkProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export interface SocialButtonProps extends LinkProps {
	name: string;
	iconSrc: string;
	href: string;
}

function SocialButton({ href, iconSrc, name, ...props }: SocialButtonProps) {
	return (
		<a
			{...props}
			href={href}
			target="_blank"
			className={classNames(
				'bg-very-washed p-3.5 hover:bg-slate-700',
				'items-center rounded-full shadow-md transition-colors',
			)}
		>
			<div>
				<img
					src={iconSrc}
					alt={`${name} icon`}
					aria-hidden="true"
					width={22}
					height={22}
				/>
			</div>
		</a>
	);
}

export default SocialButton;
