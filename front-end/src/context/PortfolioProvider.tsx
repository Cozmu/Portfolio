import { useMemo, useEffect, useState } from 'react';
import PortfolioContext from './PortfolioContext';
import { type IProps } from './interfaces/IContext';
import { type Irequest } from '../service/APIgithub';

function PortfolioProvider({ children }: IProps): JSX.Element {
  const [pulseContactCard, setPulseContactCard] = useState<boolean>(false);
  const [contactCard, setContactCard] = useState<React.ReactNode>();
  const localBaseColors = localStorage.getItem('baseColors'); // implementar
  const [projects, setProjects] = useState<Irequest[]>();
  const [toggleBaseColors, setToggleBaseColors] = useState<string>(
    localBaseColors ?? 'dark',
  );

  useEffect(() => {
    if (toggleBaseColors === 'dark') {
      document.documentElement.classList.remove('scrollbar-track-gray-300');
      document.documentElement.classList.add(
        'dark',
        'scrollbar-track-zinc-900',
        'overflow-y-scroll',
      );
    } else {
      document.documentElement.classList.remove(
        'dark',
        'scrollbar-track-zinc-900',
        'overflow-y-scroll',
      );
      document.documentElement.classList.add('scrollbar-track-gray-300');
    }
  }, [toggleBaseColors]);

  const values = useMemo(
    () => ({
      projects,
      contactCard,
      toggleBaseColors,
      pulseContactCard,
      setContactCard,
      setToggleBaseColors,
      setPulseContactCard,
      setProjects,
    }),
    [projects, toggleBaseColors, contactCard, pulseContactCard],
  );

  return (
    <PortfolioContext.Provider value={values}>
      {children}
    </PortfolioContext.Provider>
  );
}

export default PortfolioProvider;
