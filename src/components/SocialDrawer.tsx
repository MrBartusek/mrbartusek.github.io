import SocialChip from './SocialChip';

import GithubLogo from '../assets/github-logo.svg';
import LinkedInLogo from '../assets/linkedin-logo.svg';
import EmailLogo from '../assets/email.svg';
import DiscordLogo from '../assets/discord-logo.svg';

function SocialDrawer() {
	return (
		<div className='flex flex-wrap gap-3 my-12 lg:justify-start justify-center'>
			<SocialChip name='GitHub' iconSrc={GithubLogo} href='https://github.com/MrBartusek' />
			<SocialChip name='LinkedIn' iconSrc={LinkedInLogo} href='https://www.linkedin.com/in/bartosz-dokurno/' />
			<SocialChip name='Discord (mrbartusek)' iconSrc={DiscordLogo} href='https://discordapp.com/users/212988300137463809' />
			<SocialChip name='bartosz@dokurno.dev' iconSrc={EmailLogo} href='mailto:bartosz@dokurno.dev' />
		</div>
	);
}

export default SocialDrawer;
