import GithubLogo from './assets/github-logo.svg';
import LinkedInLogo from './assets/linkedin-logo.svg';
import EmailLogo from './assets/email.svg';

export interface SocialPlatform {
    name: string;
    displayName?: string;
    icon: string;
    url: string;
}

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
	{
		name: 'GitHub',
		icon: GithubLogo,
		url: 'https://github.com/MrBartusek'
	},
	{
		name: 'LinkedIn',
		icon: LinkedInLogo,
		url: 'https://www.linkedin.com/in/bartosz-dokurno/'
	},
	{
		name: 'E-Mail',
		displayName: 'bartosz@dokurno.dev',
		icon: EmailLogo,
		url: 'mailto:bartosz@dokurno.dev'
	}
];
