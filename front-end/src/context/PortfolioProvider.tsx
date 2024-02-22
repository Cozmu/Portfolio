import { useMemo, useEffect, useState } from 'react';
import PortfolioContext from './PortfolioContext';
import { type IProps } from './interfaces/IContext';
import filterDate, { type Irequest, type Iproject } from '../service/APIgithub';
import unzipFile, { type IunzipFile } from '../service/ImagesAPI';

interface IserviceAPI {
  projectsReq: Irequest[];
  projectsIMG: IunzipFile[];
}

function PortfolioProvider({ children }: IProps): JSX.Element {
  const [floatingMenu, setFloatingMenu] = useState(false);
  const [pulseContactCard, setPulseContactCard] = useState<boolean>(false);
  const [contactCard, setContactCard] = useState<React.ReactNode>();
  const localBaseColors = localStorage.getItem('baseColors'); // implementar
  const [projects, setProjects] = useState<Iproject[]>();
  const [toggleBaseColors, setToggleBaseColors] = useState<string>(
    localBaseColors ?? 'light',
  );

  const serviceAPI = async (): Promise<IserviceAPI> => {
    const projectsReq = await filterDate();
    const projectsIMG = await unzipFile('', 'projects');

    return { projectsReq, projectsIMG };
  };

  useEffect(() => {
    serviceAPI()
      .then(({ projectsReq, projectsIMG }) => {
        const result: Iproject[] = [];
        projectsReq.forEach((project) => {
          const imgs = projectsIMG.find((img) => {
            return img.fileName === `${project.name}-2`;
          });

          if (imgs) {
            const allProperty = Object.assign({}, project, { img: imgs });
            result.push(allProperty);
          } else {
            const allProperty = Object.assign({}, project, {
              img: {
                fileName: projectsIMG[0].fileName,
                url: projectsIMG[0].url,
              },
            });
            result.push(allProperty);
          }
        });
        setProjects(result);
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
    localStorage.setItem('baseColors', toggleBaseColors);
  }, [toggleBaseColors]);

  const values = useMemo(
    () => ({
      floatingMenu,
      projects,
      contactCard,
      toggleBaseColors,
      pulseContactCard,
      setContactCard,
      setToggleBaseColors,
      setPulseContactCard,
      setProjects,
      setFloatingMenu,
    }),
    [projects, toggleBaseColors, contactCard, pulseContactCard, floatingMenu],
  );

  return (
    <PortfolioContext.Provider value={values}>
      {children}
    </PortfolioContext.Provider>
  );
}

export default PortfolioProvider;
