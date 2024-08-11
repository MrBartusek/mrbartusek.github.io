import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export interface SocialPlatform {
	name: string;
	icon: React.ReactNode;
	url: string;
}

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
	{
		name: 'GitHub',
		icon: <FaGithub />,
		url: 'https://github.com/MrBartusek',
	},
	{
		name: 'LinkedIn',
		icon: <FaLinkedin />,
		url: 'https://www.linkedin.com/in/bartosz-dokurno/',
	},
	{
		name: 'E-Mail',
		icon: <FaEnvelope />,
		url: 'mailto:bartosz@dokurno.dev',
	},
];
