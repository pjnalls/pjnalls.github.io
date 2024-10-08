import { MantineStyleProp } from '@mantine/core';
import * as FaReactIcons from 'react-icons/fa';
import * as SiReactIcons from 'react-icons/si';

export type NavLinkProps = { label: string; route: string; href: string };
export type ProfessionProps = {
  dates: string;
  concentration: string;
  id?: number;
  onMouseEvent?: MouseEvent;
  style?: MantineStyleProp;
  title: string;
};
export type SkillProps = {
  faIcon?: keyof typeof FaReactIcons;
  siIcon?: keyof typeof SiReactIcons;
  id?: number;
  onMouseEvent?: MouseEvent;
  otherIcon?: string;
  skill: string;
  stars?: number;
  style?: MantineStyleProp;
};
export type WorkProps = {
  description: string;
  fullDescription?: string;
  name: string;
  githubUrl: string;
  imgSrc: string;
  previewImgSrc?: string;
  ingredients: SkillProps[];
  style?: MantineStyleProp;
  workUrl?: string;
  url?: string;
};
export type CertProps = {
  alt: string;
  description: string;
  name: string;
  imgUrl: string;
  issuer: string;
  certUrl?: string;
};
export type LanguageProps = {
  languageCode: string;
  languageLabel: string;
  selfIntro: string;
};
