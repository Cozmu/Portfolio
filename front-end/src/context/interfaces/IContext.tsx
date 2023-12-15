interface IGlobalContext {
  projects: object[] | undefined;
  toggleBaseColors: string;
  setToggleBaseColors: (value: string) => void;
  setContactCard: (value: React.ReactNode) => void;
  contactCard: React.ReactNode;
  setPulseContactCard: (value: boolean) => void;
  pulseContactCard: boolean;
  setProjects: (value: object[]) => void;
}

interface IProps {
  children: JSX.Element;
}

export type { IGlobalContext, IProps };
