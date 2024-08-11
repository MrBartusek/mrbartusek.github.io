import classNames from 'classnames';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { SOCIAL_PLATFORMS } from '../data/socialPlatforms';
import SocialChip from './SocialChip';

type DivProps = DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>;

export interface SocialChipsDrawerProps extends DivProps {}

function HeroSocialDrawer({ className, ...props }: SocialChipsDrawerProps) {
	return (
		<div
			{...props}
			className={classNames(
				'flex flex-wrap justify-center gap-6 lg:justify-start',
				className,
			)}
		>
			{SOCIAL_PLATFORMS.map((platform, i) => {
				return (
					<SocialChip
						name={platform.name}
						icon={platform.icon}
						url={platform.url}
						variant="big"
						key={i}
					/>
				);
			})}
		</div>
	);
}

export default HeroSocialDrawer;
