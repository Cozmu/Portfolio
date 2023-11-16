import { useMemo, useEffect, useState } from 'react';
import PortfolioContext from './PortfolioContext';
import { type IProps } from './interfaces/IContext';
import request from '../service/APIgithub';

function PortfolioProvider({ children }: IProps): JSX.Element {
  const localBaseColors = localStorage.getItem('baseColors');
  const [projects, setProjects] = useState<object[]>();
  const [toggleBaseColors, setToggleBaseColors] = useState(
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
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [toggleBaseColors]);

  const values = useMemo(
    () => ({
      projects,
      toggleBaseColors,
      setToggleBaseColors,
    }),
    [projects, toggleBaseColors],
  );

  return (
    <PortfolioContext.Provider value={values}>
      {children}
    </PortfolioContext.Provider>
  );
}

export default PortfolioProvider;
