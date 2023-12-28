import { useContext, type ReactElement, useEffect, useState } from 'react';
import Header from '../components/Header';
import PortfolioContext from '../context/PortfolioContext';
import filterDate, { type Irequest, type Iproject } from '../service/APIgithub';
import unzipFile, { type IunzipFile } from '../service/ImagesAPI';
import Loading from '../components/Loading';
import ProjectsCards from '../components/ProjectsCards';

interface IserviceAPI {
  projects: Irequest[];
  projectsIMG: IunzipFile[];
}

function Projects(): ReactElement {
  const [isLoading, setIsLoading] = useState(true);
  const { setProjects } = useContext(PortfolioContext);

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
        setTimeout(() => {
          if (result.length > 0) {
            setIsLoading(false);
          }
        }, 500);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return (
      <section
        className={`flex w-full h-screen items-center justify-center
        gap-1
        `}
      >
        <Loading measures={{ W: 'w-5', H: 'h-5' }} />
      </section>
    );
  }

  return (
    <div>
      <Header />
      <div className='pt-52 p-6 mx-10'>
        <section className='flex flex-col gap-2'>
          <p className='text-lg dark:text-contrast text-tertiary'>
            . . /projetos
          </p>
          <h1
            className={`text-black dark:text-white 
              text-3xl mb-11 border-b pb-4 
              dark:border-zinc-400/20 border-zinc-400/40`}
          >
            Meus projetos
          </h1>
        </section>
        <ProjectsCards />
      </div>
    </div>
  );
}

export default Projects;
