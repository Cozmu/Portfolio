import { type ReactElement } from 'react';
import ProjectsCards from './ProjectsCards';

function Highlights(): ReactElement {
  return (
    <div>
      <p>Projetos</p>
      <ProjectsCards />
      <button>Ver mais</button>
    </div>
  );
}

export default Highlights;
