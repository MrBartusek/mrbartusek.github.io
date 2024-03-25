import classNames from 'classnames';
import React from 'react';
import Container from '../Container';

export interface FooterContainerProps {
	children: React.ReactNode;
	className?: string;
}

function FooterContainer({ children, className }: FooterContainerProps) {
	return (
		<footer className="border-t border-black bg-dark text-light">
			<Container>
				<div className={classNames('py-8 text-gray-300', className)}>
					{children}
				</div>
			</Container>
		</footer>
	);
}

export default FooterContainer;
