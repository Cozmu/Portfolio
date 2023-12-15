import { type Irequest } from '../../service/APIgithub';

interface IGlobalContext {
  projects: Irequest[] | undefined;
  toggleBaseColors: string;
  setToggleBaseColors: (value: string) => void;
  setContactCard: (value: React.ReactNode) => void;
  contactCard: React.ReactNode;
  setPulseContactCard: (value: boolean) => void;
  pulseContactCard: boolean;
  setProjects: (value: Irequest[]) => void;
}

interface IProps {
  children: JSX.Element;
}

export type { IGlobalContext, IProps };
