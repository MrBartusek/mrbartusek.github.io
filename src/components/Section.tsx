import classNames from 'classnames';
import Container from './Container';

export interface SectionProps
	extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	disablePadding?: boolean;
}

function Section({ disablePadding = false, ...props }: SectionProps) {
	return (
		<section
			{...props}
			className={classNames({ 'py-12 lg:py-16': !disablePadding }, props.className)}
		>
			<Container>{props.children}</Container>
		</section>
	);
}

export default Section;
