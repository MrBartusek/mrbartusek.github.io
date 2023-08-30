import classNames from 'classnames';
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

export interface ButtonProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    iconSrc: string;
}

function Button(props: ButtonProps) {
	return (
		<a
			{...props}
			target='_blank'
			className={classNames(
				'bg-primary hover:bg-primary-hover flex gap-3 px-5 py-2.5',
				'items-center transition-colors rounded-xl shadow-md cursor-pointer',
				props.className
			)}>
			<div>
				<img src={props.iconSrc} alt='icon' role='presentation' width={19} height={24} />
			</div>
			{props.children}
		</a>
	);
}

export default Button;
