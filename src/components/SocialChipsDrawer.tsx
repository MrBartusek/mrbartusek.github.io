import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { SOCIAL_PLATFORMS } from '../socialPlatform';
import SocialChip from './SocialChip';
import classNames from 'classnames';

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface SocialChipsDrawerProps extends DivProps {}

function SocialChipsDrawer({ className, ...props }: SocialChipsDrawerProps) {
	return (
		<div
			{...props}
			className={classNames('flex flex-wrap justify-center gap-5 lg:justify-start', className)}
		>
			{SOCIAL_PLATFORMS.map((platform, i) => {
				return (
					<SocialChip
						name={platform.name}
						icon={platform.icon}
						url={platform.url}
						key={i}
					/>
				);
			})}
		</div>
	);
}

export default SocialChipsDrawer;
