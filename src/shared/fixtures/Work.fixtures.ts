import { WorkProps } from "../types";

export const works: Array<WorkProps> = [
  {
    name: "Supermaterial",
    ingredients: [
      { skill: "React", siIcon: "SiReact" },
      { skill: "TypeScript", siIcon: "SiTypescript" },
      { skill: "Storybook", siIcon: "SiStorybook" },
    ],
    description: "⚡🦸🦹 \"Superextended\" component library",
    imgSrc: "/works/supermat/logo.svg",
    workUrl: "/works/supermat/index.html",
    githubUrl: "https://github.com/pjnalls/supermat",
  },
  {
    name: "Modulart",
    ingredients: [
      { skill: "Sass", siIcon: "SiSass" },
      { skill: "HTML5", siIcon: "SiHtml5" },
      { skill: "2D Design", faIcon: "FaPaintBrush" },
    ],
    description: `🎨🌵💅 Art programmed with modular Sass CSS`,
    imgSrc: "/works/modulart/cactus.png",
    workUrl: "/works/modulart/index.html",
    githubUrl: "https://github.com/pjnalls/modulart-02",
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
