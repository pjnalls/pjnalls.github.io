import { WorkProps } from "../types";

export const works: Array<WorkProps> = [
    {
      name: "Supermaterial",
      ingredients: [
        { skill: "React", siIcon: "SiReact" },
        { skill: "TypeScript", siIcon: "SiTypescript" },
      ],
      description:
        "⚡🦸🦹 An implementation of the MUI Core component libray. 🌊⚛️📚🎨",
      imgSrc: "/works/supermat/logo.svg",
      workUrl: "/works/supermat/index.html",
      githubUrl: "https://github.com/pjnalls/super-material"
    },
    {
      name: "Modulart",
      ingredients: [
        { skill: "Sass", siIcon: "SiSass" },
        { skill: "2D Design", faIcon: "FaPaintBrush" }
      ],
      description: `🎨🌵💅 An example of modular SCSS.`,
      imgSrc: "/works/modulart/cactus.png",
      workUrl: "/works/modulart/index.html",
      githubUrl: "https://github.com/pjnalls/modulart-02"
    },
    {
      name: "Digital Rain",
      ingredients: [
        { skill: "Sass", siIcon: "SiSass" },
        { skill: "JavaScript", siIcon: "SiJavascript" },
      ],
      description: "🧑‍🎤🧮☔️ Emerald-colored computational rain in the browser",
      imgSrc: "/works/digirain/assets/digital-rain.jpg",
      workUrl: "/works/digirain/index.html",
      githubUrl: "https://github.com/pjnalls/digital-rains"
    },
  ];
  