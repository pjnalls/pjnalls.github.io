import { WorkProps } from "../types";

export const works: Array<WorkProps> = [
  {
    name: "Global BMI",
    ingredients: [
      { skill: "React Native", siIcon: "SiReact" },
      { skill: "React", siIcon: "SiReact" },
      { skill: "TypeScript", siIcon: "SiTypescript" },
    ],
    description: `🌐🏋️#️⃣ Global context for body mass index`,
    imgSrc: "/assets/works/global-bmi/assets/promo.png",
    workUrl: "/assets/works/global-bmi/index.html",
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
    description: "🧑‍🎤🧮☔️ Emerald-colored computational rain",
    imgSrc: "/assets/works/digirain/assets/01-dIOe20qM.png",
    workUrl: "/assets/works/digirain/index.html",
    githubUrl: "https://github.com/pjnalls/digital-rains",
  },
];
