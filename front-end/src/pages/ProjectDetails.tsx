import { useEffect, type ReactElement, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import PortfolioContext from '../context/PortfolioContext';
import unzipFile, { type IunzipFile } from '../service/ImagesAPI';
import { type Irequest } from '../service/APIgithub';

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
      {data?.map((e) => (
        <section key={e.id}>
          <p>{e.name}</p>
        </section>
      ))}
    </div>
  );
}

export default ProjectDetails;
