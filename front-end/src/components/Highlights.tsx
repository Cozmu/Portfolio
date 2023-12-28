import { type ReactElement } from 'react';
import ProjectsCards from './ProjectsCards';
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';

function Highlights(): ReactElement {
  return (
    <div className='row-span-2 flex flex-col gap-2'>
      <p className='text-lg text-contrast'>. . /destaques</p>
      <h3 className='text-black dark:text-white text-3xl'>Projetos</h3>
      <ProjectsCards home={true} />
      <NavLink
        to='/projects'
        className={`rounded-md bg-tertiary dark:bg-contrast p-1 
          hover:transition ease-in-out hover:dark:bg-tertiary hover:bg-contrast
          hover:duration-500 text-black dark:text-white 
          flex gap-2 items-center h-10 justify-center`}
      >
        Ver mais
        <FaArrowRightLong />
      </NavLink>
    </div>
  );
}

export default Highlights;
