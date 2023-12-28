import { useContext, type ReactElement } from 'react';
import PortfolioContext from '../context/PortfolioContext';
import { NavLink } from 'react-router-dom';

interface IPropsProjectsCards {
  home?: boolean;
}

function ProjectsCards({ home }: IPropsProjectsCards): ReactElement {
  const { projects } = useContext(PortfolioContext);

  if (home) {
    return <div>oi</div>;
  }

  return (
    // terminar de estilizar
    <div className='grid grid-cols-3 gap-12 my-14'>
      {projects?.map((project) => (
        <NavLink
          to={project.name}
          className={`
            hover:transition ease-in-out hover:scale-105 hover:duration-500
            w-[28rem] relative h-[28rem] rounded-lg
          `}
          key={project.id}
        >
          <img
            className={`w-full h-full absolute object-cover rounded-lg`}
            src={project.img.url}
            alt={project.img.fileName}
          />
          <div
            className={`absolute inset-0 bg-black rounded-lg opacity-10 hover:opacity-0`}
          />
          <div
            className={`opacity-0 hover:opacity-100 hover:duration-500 bg-gradient-to-t
              from-zinc-800/50 to-transparent dark:from-zinc-900/50 dark:to-transparent
                h-full rounded-lg absolute px-5 flex flex-col gap-1 pb-6 justify-end`}
          >
            {project.img.fileName === 'back-end' && (
              <div className='mx-auto mb-20 flex flex-col items-center gap-1'>
                <span className='text-slate-50 text-6xl'>APENAS</span>
                <span className='text-slate-50 text-6xl'>BACK-END</span>
              </div>
            )}
            <h1 className='text-slate-50 text-2xl font-bold'>{project.name}</h1>
            <p
              className={`text-sm text-zinc-300 
                tracking-tight text-justify text-ellipsis w-[25.5rem]
                overflow-hidden truncate`}
            >
              {project.description}
            </p>
            <div className='flex gap-3 mt-3'>
              {project.topics.slice(-3).map((topic) => (
                <section key={topic}>
                  <p
                    className={`uppercase dark:bg-contrast/60
                     bg-tertiary/60 text-slate-50 p-[4px] rounded-sm`}
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
