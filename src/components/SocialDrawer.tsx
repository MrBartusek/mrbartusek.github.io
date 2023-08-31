import { SOCIAL_PLATFORMS } from '../socialPlatform';
import SocialChip from './SocialChip';

function SocialDrawer() {
	return (
		<div className='flex flex-wrap gap-3 my-12 lg:justify-start justify-center'>
			{SOCIAL_PLATFORMS.map((platform, i) => {
				return (
					<SocialChip
						name={platform.name}
						displayName={platform.displayName}
						iconSrc={platform.icon}
						href={platform.url}
						key={i}
					/>
				);
			})}
		</div>
	);
}

export default SocialDrawer;
