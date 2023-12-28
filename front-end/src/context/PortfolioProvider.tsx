import { useMemo, useEffect, useState } from 'react';
import PortfolioContext from './PortfolioContext';
import { type IProps } from './interfaces/IContext';
import filterDate, { type Irequest, type Iproject } from '../service/APIgithub';
import unzipFile, { type IunzipFile } from '../service/ImagesAPI';

interface IserviceAPI {
  projects: Irequest[];
  projectsIMG: IunzipFile[];
}

function PortfolioProvider({ children }: IProps): JSX.Element {
  const [pulseContactCard, setPulseContactCard] = useState<boolean>(false);
  const [contactCard, setContactCard] = useState<React.ReactNode>();
  const localBaseColors = localStorage.getItem('baseColors'); // implementar
  const [projects, setProjects] = useState<Iproject[]>();
  const [toggleBaseColors, setToggleBaseColors] = useState<string>(
    localBaseColors ?? 'dark',
  );

  const serviceAPI = async (): Promise<IserviceAPI> => {
    const projects = await filterDate();
    const projectsIMG = await unzipFile('', 'projects');

    return { projects, projectsIMG };
  };

  useEffect(() => {
    serviceAPI()
      .then(({ projects, projectsIMG }) => {
        const result: Iproject[] = [];
        projects.forEach((project) => {
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
        console.log('C', result);

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
