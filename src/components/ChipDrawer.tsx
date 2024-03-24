import classNames from 'classnames';

export interface ChipDrawerProps {
	children?: React.ReactNode;
	className?: string;
}

function ChipDrawer({ className, children }: ChipDrawerProps) {
	return (
		<div className={classNames('flex flex-wrap gap-x-2 gap-y-3', className)}>
			{children}
		</div>
	);
}

export default ChipDrawer;
