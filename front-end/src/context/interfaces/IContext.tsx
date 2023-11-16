interface IGlobalContext {
  projects: object[] | undefined;
  toggleBaseColors: string;
  setToggleBaseColors: (value: string) => void;
}

interface IProps {
  children: JSX.Element;
}

export type { IGlobalContext, IProps };
