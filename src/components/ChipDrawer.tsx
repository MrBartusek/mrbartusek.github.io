import classNames from 'classnames';

export interface ChipDrawerProps {
	children?: React.ReactNode;
	className?: string;
}

function ChipDrawer({ className, children }: ChipDrawerProps) {
	return (
		<div
			className={classNames(
				'flex flex-wrap gap-x-1.5 gap-y-2.5 md:gap-x-2 md:gap-y-3',
				className,
			)}
		>
			{children}
		</div>
	);
}

export default ChipDrawer;
