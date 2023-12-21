import { useContext, type ReactElement } from 'react';
import PortfolioContext from '../context/PortfolioContext';
import { NavLink } from 'react-router-dom';

function ProjectsCards(): ReactElement {
  const { projects } = useContext(PortfolioContext);

  return (
    // terminar de estilizar
    <div className='grid grid-cols-3 gap-12'>
      {projects?.map((project) => (
        <NavLink
          to={``}
          className={`w-[28rem] relative h-[28rem] rounded-lg`}
          key={project.id}
        >
          <img
            className={`w-full h-full absolute object-cover rounded-lg`}
            src={project.img.url}
            alt={project.img.fileName}
          />
          <div className='absolute inset-0 bg-black opacity-10 hover:op`'></div>
          <div
            className={`opacity-0 hover:opacity-100 hover:duration-300 bg-gradient-to-t
              from-zinc-900/80 to-transparent h-full rounded-lg absolute px-5
              text-slate-50 flex flex-col gap-1 pb-6 justify-end`}
          >
            <h1 className='text-2xl font-bold'>{project.name}</h1>
            <p
              className={`text-sm h-10 overflow-hidden tracking-tight
                text-justify text-ellipsis`}
            >
              {project.description}
            </p>
            <div className='flex gap-3 mt-3'>
              {project.topics.slice(0, 3).map((topic) => (
                <section key={topic}>
                  <p
                    className={`uppercase dark:text-contrast dark:bg-contrast/40
                     bg-tertiary/40 text-contrast p-[2px] rounded-sm`}
                  >
                    {topic}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default ProjectsCards;
