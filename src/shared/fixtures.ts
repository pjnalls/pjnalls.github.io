import { ProfessionProps, NavLinkProps, SkillProps } from "./types";

export const experiences: Array<ProfessionProps> = [
  {
    concentration: "UI",
    dates: "11/2023 - Present",
    title: "Frontend Eng",
  },
  {
    concentration: "UI",
    dates: "1/2022 - 6/2023",
    title: "Frontend Eng",
  },
  {
    concentration: "UI",
    dates: "6/2021 - 8/2021",
    title: "App Engineer",
  },
  {
    concentration: "Fullstack",
    dates: "5/2021 - 7/2021",
    title: "Webdev",
  },
  {
    concentration: "Replenish",
    dates: "11/2020 - 5/2021",
    title: "Assoc",
  },
  {
    concentration: "Fullstack",
    dates: "12/2019 - 8/2020",
    title: "Webdev",
  },
  {
    concentration: "Fullstack",
    dates: "12/2018 - 11/2019",
    title: "App Dev",
  },
  {
    concentration: "UI",
    dates: "6/2018 - 11/2018",
    title: "Salesforce Dev",
  },
  {
    concentration: "Intern",
    dates: "12/2017 - 6/2018",
    title: "Web Dev",
  },
  {
    concentration: "Intern",
    dates: "5/2017 - 8/2017",
    title: "SWE",
  },
  {
    concentration: "Bilingual",
    dates: "5/2015 - 10/2017",
    title: "Ads QA",
  },
  {
    concentration: "Sales Team",
    dates: "8?/2014 - 5/2015",
    title: "Assoc",
  },
  {
    concentration: "Data Entry",
    dates: "2/2014 - 8?/2014",
    title: "Contr",
  },
  {
    concentration: "English",
    dates: "3/2013 - 12/2013",
    title: "Teacher",
  },
  {
    concentration: "Pharmacy",
    dates: "12/2012 - 3/2013",
    title: "Tech",
  },
];
export const education: Array<ProfessionProps> = [
  {
    concentration: "BS",
    dates: "8/2015 - 5/2018",
    title: "CompSci Grad",
  },
  {
    concentration: "BS",
    dates: "8/2007 - 12/2012",
    title: "MasCom Grad",
  },
  {
    concentration: "Minor",
    dates: "6/2010 - 12/2012",
    title: "Art",
  },
  {
    concentration: "Minor",
    dates: "6/2010 - 12/2012",
    title: "Japanese",
  },
  {
    concentration: "Relief",
    dates: "6/2012 - 6/2012",
    title: "Volunteer",
  },
  {
    concentration: "Int'l",
    dates: "8/2008 - 12/2008",
    title: "Undergrad",
  },
];
export const navLinks: Array<NavLinkProps> = [
  { label: "Cover", route: "", href: "/" },
  { label: "About", route: "about", href: "/about" },
  { label: "Works", route: "works", href: "/works" },
  { label: "Resume", route: "resume", href: "/resume" },
];
export const designSkills: Array<SkillProps> = [
  {
    skill: "Figma",
    faIcon: "FaFigma",
    stars: 4.8,
  },
  {
    skill: "Photoshop",
    siIcon: "SiAdobephotoshop",
    stars: 4.6,
  },
  {
    skill: "2D Design",
    faIcon: "FaPaintBrush",
    stars: 4.9,
  },
  {
    skill: "UX R&D",
    faIcon: "FaComment",
    stars: 4.5,
  },
];
export const devSkills: Array<SkillProps> = [
  {
    skill: "React",
    faIcon: "FaReact",
    stars: 4.5,
  },
  {
    skill: "TypeScript",
    siIcon: "SiTypescript",
    stars: 4.6,
  },
  {
    skill: "Sass",
    faIcon: "FaSass",
    stars: 4.7,
  },
  {
    skill: "Mantine",
    siIcon: "SiMantine",
    stars: 4.8,
  },
  {
    skill: "ES6+",
    siIcon: "SiJavascript",
    stars: 4.8,
  },
  {
    skill: "Node.js",
    faIcon: "FaNodeJs",
    stars: 4.2,
  },
  {
    skill: "React Native",
    siIcon: "SiReact",
    stars: 4.3,
  },
  {
    skill: "Vite",
    siIcon: "SiVite",
    stars: 4.5,
  },
];

export const prodSkills: Array<SkillProps> = [
  {
    skill: "Git",
    faIcon: "FaGitAlt",
    stars: 4.6,
  },
  {
    skill: "Windows",
    faIcon: "FaWindows",
    stars: 4.6,
  },
  {
    skill: "macOS",
    siIcon: "SiMacos",
    stars: 4.5,
  },
  {
    skill: "iOS",
    siIcon: "SiIos",
    stars: 4.5,
  },
  {
    skill: "Android",
    siIcon: "SiAndroid",
    stars: 4.3,
  },
  {
    skill: "Chrome",
    siIcon: "SiGooglechrome",
    stars: 4.5,
  },
  {
    skill: "GitHub",
    siIcon: "SiGithub",
    stars: 4.7,
  },
];
