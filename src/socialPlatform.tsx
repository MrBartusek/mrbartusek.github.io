import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { TbFileCv } from 'react-icons/tb';

export interface SocialPlatform {
	name: string;
	icon: React.ReactNode;
	url: string;
}

// FIX ME
export const RESUME_URL = 'https://www.linkedin.com/in/bartosz-dokurno/';

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
	{
		name: 'Résumé',
		icon: <TbFileCv />,
		url: RESUME_URL,
	},
];
