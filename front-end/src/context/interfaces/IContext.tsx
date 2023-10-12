interface IGlobalContext {
  projects: object[] | undefined;
}

interface IProps {
  children: JSX.Element;
}

export type { IGlobalContext, IProps };
