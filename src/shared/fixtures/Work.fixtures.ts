import { WorkProps } from '@/src/shared/types';

export const works: Array<WorkProps> = [
	{
		name: 'iTunes',
		ingredients: [
			{ skill: 'React Native', siIcon: 'SiReact' },
			{ skill: 'Expo', siIcon: 'SiExpo' },
			{ skill: 'TypeScript', siIcon: 'SiTypescript' },
		],
		description: `🍎🎵🎧 an iTunes clone`,
		imgSrc: '/assets/works/itunes/favicon.png',
		workUrl: '/assets/works/itunes/index.html',
		githubUrl: 'https://github.com/pjnalls/itunes/',
	},
	{
		name: 'Supermaterial',
		ingredients: [
			{ skill: 'React', siIcon: 'SiReact' },
			{ skill: 'TypeScript', siIcon: 'SiTypescript' },
			{ skill: 'Storybook', siIcon: 'SiStorybook' },
		],
		description: '⚡🦸🦹 "Superextended" component library',
		imgSrc: '/assets/works/supermaterial/logo.svg',
		workUrl: '/assets/works/supermaterial/index.html',
		githubUrl: 'https://github.com/pjnalls/Supermaterial',
	},
	{
		name: 'Digital Rain',
		ingredients: [
			{ skill: 'Sass', siIcon: 'SiSass' },
			{ skill: 'TypeScript', siIcon: 'SiTypescript' },
			{
				skill: 'Animation',
				faIcon: 'FaFilm',
			},
		],
		description: '🧑‍🎤🧮☔️ Emerald-colored computational rain',
		imgSrc: '/assets/works/digirain/assets/01-2upQI7vH.png',
		workUrl: '/assets/works/digirain/index.html',
		githubUrl: 'https://github.com/pjnalls/digital-rains/',
	},
];
