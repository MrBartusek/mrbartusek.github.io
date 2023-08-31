
export interface SkillsList {
    frontend: string[];
    backend: string[];
    other: string[];
}

export const SKILLS: SkillsList = {
	frontend: [
		'HTML / CSS / JS',
		'TypeScript',
		'React',
		'jQuery',
		'TailwindCSS',
		'Sass / PostCSS',
		'Bootstrap',
		'Responsive Web Design',
		'Electron.js'
	],
	backend: [
		'Node.js',
		'TypeScript',
		'Express.js',
		'RESTful APIs',
		'Websockets',
		'PostgreSQL',
		'JWT (JSON Web Tokens)',
		'Redis'
	],
	other: [
		'Git/GitHub',
		'Docker',
		'Python',
		'Visual Studio Code',
		'Amazon Web Services (AWS)',
		'Google Analytics',
		'Open Source Development',
		'Github Actions (CI/CD)',
		'Terraform'
	]
};
