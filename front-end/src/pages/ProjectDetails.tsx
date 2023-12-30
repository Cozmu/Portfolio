import { useEffect, type ReactElement, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import PortfolioContext from '../context/PortfolioContext';
import unzipFile, { type IunzipFile } from '../service/ImagesAPI';
import { type Irequest } from '../service/APIgithub';
import Header from '../components/Header';

interface IprojectDetails extends Irequest {
  img: [
    {
      url: string;
      fileName: string;
    },
  ];
}

function ProjectDetails(): ReactElement {
  const [data, setData] = useState<IprojectDetails[]>();
  const { projectName } = useParams();
  const { projects } = useContext(PortfolioContext);

  const getProjectDetails = async (): Promise<IunzipFile[]> => {
    const projectsIMG = await unzipFile(projectName, 'project-details');
    return projectsIMG;
  };

  useEffect(() => {
    if (projects) {
      getProjectDetails()
        .then((result) => {
          const filterProject = projects
            .map((project) => {
              if (project.name === projectName) {
                return { ...project, img: result };
              }
              return 'project';
            })
            .filter(
              (project) => typeof project !== 'string',
            ) as IprojectDetails[];

          setData(filterProject);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [projects, projectName]);

  return (
    // montar componente
    <div>
      <Header />
      <main className='pt-48'>
        {data?.map(({ id, name, description, img, topics, url }) => (
          <section key={id}>
            <h1 className='p-6 mx-10'>{name}</h1>
            <div className='overflow-hidden relative'>
              <div className={`flex w-[400%]`}>
                {img.map(({ url, fileName }) => (
                  <img
                    className='w-[60rem] mr-14'
                    src={url}
                    key={fileName}
                    alt={fileName}
                  />
                ))}
                <section className='absolute'>
                  <button className='w-10 p-2 bg-red-400 m-1'>ir</button>
                  <button className='w-10 p-2 bg-red-400 m-1'>voltar</button>
                </section>
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProjectDetails;
