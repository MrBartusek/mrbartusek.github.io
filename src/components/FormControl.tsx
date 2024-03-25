import classNames from 'classnames';
import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

type FormControlProps<T extends 'input' | 'textarea'> = T extends 'input'
	? InputHTMLAttributes<HTMLInputElement>
	: T extends 'textarea'
		? TextareaHTMLAttributes<HTMLTextAreaElement>
		: never;

interface FormControlBaseProps<T extends 'input' | 'textarea'> {
	label: string;
	as: T;
}

type FormControlInputProps = FormControlBaseProps<'input'> &
	FormControlProps<'input'>;
type FormControlTextareaProps = FormControlBaseProps<'textarea'> &
	FormControlProps<'textarea'>;
type FormControlPropsType = FormControlInputProps | FormControlTextareaProps;

function FormControl(props: FormControlPropsType) {
	const element = React.createElement(props.as || 'input', {
		...props,
		className: classNames(
			'block w-full px-3 py-2.5 bg-gray-100 border-gray-200',
			'rounded-xl focus:border-primary focus:shadow-sm shadow-primary',
			'mt-1.5 mb-4 text-lg transition-shadow',
			props.className,
		),
	});
	return (
		<div className="flex-1">
			<label
				htmlFor={props.id}
				className="ms-1 text-lg "
			>
				{props.label || 'Unknown field'}:
			</label>
			{element}
		</div>
	);
}

export default FormControl;
