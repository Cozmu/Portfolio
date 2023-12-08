import { useMemo, useEffect, useState } from 'react';
import PortfolioContext from './PortfolioContext';
import { type IProps } from './interfaces/IContext';
import request from '../service/APIgithub';

function PortfolioProvider({ children }: IProps): JSX.Element {
  const [contactCard, setContactCard] = useState<React.ReactNode>();
  const localBaseColors = localStorage.getItem('baseColors');
  const [projects, setProjects] = useState<object[]>();
  const [toggleBaseColors, setToggleBaseColors] = useState<string>(
    localBaseColors ?? 'dark',
  );

  const serviceAPI = async (): Promise<object[]> => {
    const result = await request();
    return result;
  };

  useEffect(() => {
    serviceAPI()
      .then((x) => {
        setProjects(x);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
      setContactCard,
      contactCard,
      toggleBaseColors,
      setToggleBaseColors,
    }),
    [projects, toggleBaseColors, contactCard],
  );

  return (
    <PortfolioContext.Provider value={values}>
      {children}
    </PortfolioContext.Provider>
  );
}

export default PortfolioProvider;
