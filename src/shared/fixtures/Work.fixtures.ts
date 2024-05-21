import { WorkProps } from "../types";

export const works: Array<WorkProps> = [
  {
    name: "Time Series Analysis",
    ingredients: [
      { skill: "Python", siIcon: "SiPython" },
      { skill: "NumPy", siIcon: "SiNumpy" },
      { skill: "pandas", siIcon: "SiPandas" },
    ],
    description: `🏢⏰🌳 Weather forecast analysis`,
    imgSrc: "/assets/works/tsa/thumbnail.png",
    workUrl: "/assets/works/tsa/index.html",
    githubUrl: "https://github.com/pjnalls/global-bmi",
  },
  {
    name: "Supermaterial",
    ingredients: [
      { skill: "React", siIcon: "SiReact" },
      { skill: "TypeScript", siIcon: "SiTypescript" },
      { skill: "Storybook", siIcon: "SiStorybook" },
    ],
    description: '⚡🦸🦹 "Superextended" component library',
    imgSrc: "/assets/works/supermaterial/logo.svg",
    workUrl: "/assets/works/supermaterial/index.html",
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
    description: "🧑‍🎤🧮☔️ Computational rain in-browser",
    imgSrc: "/assets/works/digirain/assets/01-dIOe20qM.png",
    workUrl: "/assets/works/digirain/index.html",
    githubUrl: "https://github.com/pjnalls/digital-rains",
  },
];
