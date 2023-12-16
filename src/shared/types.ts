import { MantineStyleProp } from "@mantine/core";
import * as FaReactIcons from "react-icons/fa";
import * as SiReactIcons from "react-icons/si";

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
  stars: number;
  style?: MantineStyleProp;
};
export type NavLinkProps = { label: string; route: string; href: string };
