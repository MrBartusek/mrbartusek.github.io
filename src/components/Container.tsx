export interface ContainerProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	children: React.ReactNode;
}

function Container(props: ContainerProps) {
	return (
		<div
			{...props}
			className={`container m-auto px-8 ${props.className}`}
		/>
	);
}

export default Container;
