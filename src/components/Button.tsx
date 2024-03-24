import classNames from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import './Button.css';

export interface ButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {}

function Button(props: ButtonProps) {
	return (
		<button
			{...props}
			className={classNames('styled-button bg-primary', props.className)}
		>
			{props.children}
		</button>
	);
}

export default Button;
