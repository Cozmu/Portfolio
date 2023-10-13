import { useMemo, useEffect, useState } from 'react';
import PortfolioContext from './PortfolioContext';
import { type IProps } from './interfaces/IContext';
import request from '../service/APIgithub';

function PortfolioProvider({ children }: IProps): JSX.Element {
  const [projects, setProjects] = useState<object[]>();

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

  const values = useMemo(
    () => ({
      projects,
    }),
    [projects],
  );

  return (
    <PortfolioContext.Provider value={values}>
      {children}
    </PortfolioContext.Provider>
  );
}

export default PortfolioProvider;
