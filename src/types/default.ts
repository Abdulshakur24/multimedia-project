export interface infoProps {
  purpose: string;
}

export type projectsProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  videoCode: string;
  source: string;
  visit: string;
  id: number;
}[];

export type timeLineDataProps = {
  year: number;
  text: string;
}[];

export type socialLinksProps = {
  component: (index: number) => JSX.Element;
}[];

export interface technologiesProps {
  title: string;
  frontEnd: string;
  backEnd: string;
  uiOrux: string;
}

export interface aboutMeProps {
  title: string;
}

export type achievementsProps = { number: number; text: string }[];

export interface contactsProps {
  tel: string;
  email: string;
}
