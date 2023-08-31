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
			className={classNames('styled-button', props.className)}
		>
			{props.iconSrc ? (
				<div>
					<img src={props.iconSrc} alt='icon' aria-hidden="true" width={19} height={19} />
				</div>
			): null}

			{props.children}
		</a>
	);
}

export default LinkButton;
