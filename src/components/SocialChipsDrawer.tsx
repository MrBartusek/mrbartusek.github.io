import { SOCIAL_PLATFORMS } from '../socialPlatform';
import SocialChip from './SocialChip';

function SocialChipsDrawer() {
	return (
		<div className="mt-12 flex flex-wrap justify-center gap-5 lg:justify-start">
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
