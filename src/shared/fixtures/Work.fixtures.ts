import { WorkProps } from "../types";

export const works: Array<WorkProps> = [
  {
    name: "Modulart",
    ingredients: [
      { skill: "Sass", siIcon: "SiSass" },
      { skill: "HTML5", siIcon: "SiHtml5" },
      { skill: "2D Design", faIcon: "FaPaintBrush" },
    ],
    description: `🎨☀️💅 Art of the Sun programmed with modular Sass CSS`,
    imgSrc: "/works/modulart-01/art.avif",
    workUrl: "/works/modulart-01/index.html",
    githubUrl: "https://github.com/pjnalls/modulart-01",
  },
  {
    name: "Supermaterial",
    ingredients: [
      { skill: "React", siIcon: "SiReact" },
      { skill: "TypeScript", siIcon: "SiTypescript" },
      { skill: "Storybook", siIcon: "SiStorybook" },
    ],
    description: '⚡🦸🦹 "Superextended" component library',
    imgSrc: "/works/supermaterial/logo.svg",
    workUrl: "/works/supermaterial/index.html",
    githubUrl: "https://github.com/pjnalls/Supermaterial",
  },

  {
    name: "Digital Rain",
    ingredients: [
      { skill: "Sass", siIcon: "SiSass" },
      { skill: "JavaScript", siIcon: "SiJavascript" },
      {
        skill: "Animation",
        faIcon: "FaFilm",
      },
    ],
    description: "🧑‍🎤🧮☔️ Emerald-colored computational rain",
    imgSrc: "/works/digirain/assets/01.png",
    workUrl: "/works/digirain/index.html",
    githubUrl: "https://github.com/pjnalls/digital-rains",
  },
];
