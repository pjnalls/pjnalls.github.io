import { ProfessionProps, NavLinkProps, SkillProps } from "./types";

export const experiences: Array<ProfessionProps> = [
  {
    concentration: "Frontend",
    dates: "11/2023 - Present",
    title: "Sr Software Eng",
  },
  {
    concentration: "Frontend",
    dates: "1/2022 - 6/2023",
    title: "Sr Software Eng",
  },
  {
    concentration: "JavaScript",
    dates: "6/ - 8/2021",
    title: "App Engineer",
  },
  {
    concentration: "Fullstack",
    dates: "5/ - 7/2021",
    title: "Web Developer",
  },
  {
    concentration: "Replenishment",
    dates: "11/2020 - 5/2021",
    title: "Assoc",
  },
  {
    concentration: "Web",
    dates: "12/2019 - 8/2020",
    title: "Software Developer",
  },
  {
    concentration: "Fullstack",
    dates: "12/2018 - 11/2019",
    title: "App Developer",
  },
  {
    concentration: "Salesforce",
    dates: "6/ - 11/2018",
    title: "App Developer",
  },
  {
    concentration: "Frontend Intern",
    dates: "12/2017 - 6/2018",
    title: "Developer",
  },
  {
    concentration: "Intern",
    dates: "5/ - 8/2017",
    title: "Software Engineer",
  },
  {
    concentration: "Bilingual",
    dates: "5/2015 - 10/2017",
    title: "Ads Quality Rater",
  },
  {
    concentration: "Sales Team",
    dates: "8?/2014 - 5/2015",
    title: "Assoc",
  },
  {
    concentration: "Data Entry",
    dates: "2/ - 8?/2014",
    title: "Contractor",
  },
  {
    concentration: "English",
    dates: "3/ - 12/2013",
    title: "Language Teacher",
  },
  {
    concentration: "Pharmacy",
    dates: "12/2012 - 3/2013",
    title: "Technichian",
  },
];
export const education: Array<ProfessionProps> = [
  {
    concentration: "Computer Sci",
    dates: "8/2015 - 5/2018",
    title: "BS Grad",
  },
  {
    concentration: "Mass Comm",
    dates: "8/2007 - 12/2012",
    title: "BS Grad",
  },
  {
    concentration: "Art Minor",
    dates: "6/2010 - 12/2012",
    title: "Undergrad",
  },
  {
    concentration: "Japanese Minor",
    dates: "6/2010 - 12/2012",
    title: "Undegrad",
  },
  {
    concentration: "Disaster Relief",
    dates: "6/ - 6/2012",
    title: "Volunteer",
  },
  {
    concentration: "Int'l Exchange",
    dates: "8/ - 12/2008",
    title: "Abroad",
  },
];
export const navLinks: Array<NavLinkProps> = [
  { label: "Cover", route: "", href: "/" },
  // { label: "About", route: "about", href: "/about" },
  // { label: "Works", route: "works", href: "/works" },
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
    skill: "UX Research",
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
    skill: "Sass (SCSS)",
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
    stars: 4.0,
  },
  {
    skill: "macOS",
    siIcon: "SiMacos",
    stars: 4.0,
  },
  {
    skill: "iOS",
    siIcon: "SiIos",
    stars: 4.0,
  },
  {
    skill: "Android",
    siIcon: "SiAndroid",
    stars: 4.0,
  },
  {
    skill: "Google Chrome",
    siIcon: "SiGooglechrome",
    stars: 4.5,
  },
  {
    skill: "GitHub",
    siIcon: "SiGithub",
    stars: 4.7,
  },
];
