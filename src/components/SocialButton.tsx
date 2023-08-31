import classNames from 'classnames';
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

export interface SocialButtonProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    name: string;
    iconSrc: string;
    href: string;
}

function SocialButton(props: SocialButtonProps) {
	const passProps = {
		...props,
		name: undefined,
		iconSrc: undefined,
		href: undefined
	};
	return (
		<a
			{...passProps}
			href={props.href}
			target='_blank'
			className={classNames(
				'bg-very-washed hover:bg-slate-700 p-3.5',
				'items-center transition-colors rounded-full shadow-md'
			)}>
			<div>
				<img src={props.iconSrc} alt={`${props.name} icon`} role='none' width={22} height={22} />
			</div>
		</a>
	);
}

export default SocialButton;
