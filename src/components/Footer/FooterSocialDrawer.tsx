import classNames from 'classnames';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { SOCIAL_PLATFORMS } from '../../socialPlatform';
import SocialChip from '../SocialChip';

type DivProps = DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>;

export interface SocialChipsDrawerProps extends DivProps {}

function FooterSocialDrawer({ className, ...props }: SocialChipsDrawerProps) {
	return (
		<div
			{...props}
			className={classNames(
				'flex flex-wrap items-center gap-5 sm:justify-center',
				className,
			)}
		>
			{SOCIAL_PLATFORMS.map((platform, i) => {
				return (
					<SocialChip
						name={platform.name}
						icon={platform.icon}
						url={platform.url}
						variant="medium"
						key={i}
					/>
				);
			})}
		</div>
	);
}

export default FooterSocialDrawer;
