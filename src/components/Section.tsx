import classNames from 'classnames';
import Container from './Container';

export interface SectionProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{

}

function Section(props: SectionProps) {
	return (
		<section {...props} className={classNames('lg:py-16 py-12', props.className)}>
			<Container>
				{props.children}
			</Container>
		</section>
	);
}

export default Section;
