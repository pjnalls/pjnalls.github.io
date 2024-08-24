import { WorkProps } from '@/src/shared/types';

export const works: Array<WorkProps> = [
  {
    name: 'AI-less YouTube',
    ingredients: [
      { skill: 'React Native', siIcon: 'SiReact' },
      { skill: 'Expo', siIcon: 'SiExpo' },
      { skill: 'TypeScript', siIcon: 'SiTypescript' },
    ],
    description: '🤖🚫📺 a video search app',
    fullDescription:
      '🤖🚫📺 a YouTube video search app with no AI for iOS, Android, and the Web',
    imgSrc: '/assets/works/ai-less-youtube/icon.png',
    previewImgSrc: '/assets/works/ai-less-youtube/preview.avif',
    githubUrl: 'https://github.com/pjnalls/ai-less-youtube/',
  },
  {
    name: 'iTunes',
    ingredients: [
      { skill: 'React Native', siIcon: 'SiReact' },
      { skill: 'Expo', siIcon: 'SiExpo' },
      { skill: 'TypeScript', siIcon: 'SiTypescript' },
    ],
    description: `🍎🎵🎧 an iTunes clone`,
    fullDescription: '🍎🎵🎧 an iTunes clone for iOS, Android, and the Web',
    imgSrc: '/assets/works/itunes/favicon.png',
    previewImgSrc: '/assets/works/itunes/preview.avif',
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
    fullDescription:
      '⚡🦸🦹 "Superextended" Material UI (MUI) component library',
    imgSrc: '/assets/works/supermaterial/logo.svg',
    previewImgSrc: '/assets/works/supermaterial/preview.avif',
    githubUrl: 'https://github.com/pjnalls/Supermaterial/',
  },
];
