import classNames from 'classnames';
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import './Button.css';

export interface ButtonProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    iconSrc?: string;
}

function LinkButton(props: ButtonProps) {
	const propsCopy = {...props};
	delete propsCopy.iconSrc;

	return (
		<a
			{...propsCopy}
			target='_blank'
			className={classNames('styled-button', props.className)}>
			<div>
				<img src={props.iconSrc} alt='icon' role='none' width={19} height={19} />
			</div>
			{props.children}
		</a>
	);
}

export default LinkButton;
