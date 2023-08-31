import { SOCIAL_PLATFORMS } from '../socialPlatform';
import SocialButton from './SocialButton';

function SocialButtonDrawer() {
	return (
		<div className='flex flex-wrap gap-3 justify-center'>
			{SOCIAL_PLATFORMS.map((platform, i) => {
				return (
					<SocialButton
						name={platform.name}
						iconSrc={platform.icon}
						href={platform.url}
						key={i}
					/>
				);
			})}
		</div>
	);
}

export default SocialButtonDrawer;
