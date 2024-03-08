
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
		'Tailwind CSS',
		'Sass / PostCSS',
		'Bootstrap',
		'Electron.js',
		'Responsive Web Design',
		'jQuery'
	],
	backend: [
		'Node.js',
		'TypeScript',
		'Express.js',
		'Nest.js',
		'PostgreSQL',
		'MongoDB & mongoose',
		'Redis',
		'RESTful APIs',
		'Websockets',
		'JWT (JSON Web Tokens)'
	],
	other: [
		'Git/GitHub',
		'Docker',
		'GitHub Actions (CI/CD)',
		'Visual Studio Code',
		'Amazon Web Services (AWS)',
		'Terraform',
		'npm',
		'Python',
		'Open Source Development',
		'Google Analytics'
	]
};
