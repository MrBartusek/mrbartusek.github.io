import classNames from 'classnames';
import Container from './Container';

export interface SectionProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{

}

function Section(props: SectionProps) {
	return (
		<section>
			<Container {...props} className={classNames('lg:my-32 my-20', props.className)}>
				{props.children}
			</Container>
		</section>
	);
}

export default Section;
