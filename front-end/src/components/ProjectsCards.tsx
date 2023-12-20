import { useContext, type ReactElement } from 'react';
import PortfolioContext from '../context/PortfolioContext';

function ProjectsCards(): ReactElement {
  const { projects } = useContext(PortfolioContext);

  return (
    <div>
      {projects?.map((project) => <section key={project.id}></section>)}
    </div>
  );
}

export default ProjectsCards;
