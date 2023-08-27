export interface ContainerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode
}

function Container(props : ContainerProps) {
	return (
		<div {...props} className={`max-w-[1280px] m-auto px-8 ${props.className}`} />
	);
}

export default Container;
