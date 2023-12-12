interface IGlobalContext {
  projects: object[] | undefined;
  toggleBaseColors: string;
  setToggleBaseColors: (value: string) => void;
  setContactCard: (value: React.ReactNode) => void;
  contactCard: React.ReactNode;
  setPulseContactCard: (value: boolean) => void;
  pulseContactCard: boolean;
}

interface IProps {
  children: JSX.Element;
}

export type { IGlobalContext, IProps };
