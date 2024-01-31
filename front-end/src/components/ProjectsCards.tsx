import { useContext, type ReactElement } from 'react';
import PortfolioContext from '../context/PortfolioContext';
import { NavLink } from 'react-router-dom';

interface IPropsProjectsCards {
  home?: boolean;
}

function ProjectsCards({ home }: IPropsProjectsCards): ReactElement {
  const { projects } = useContext(PortfolioContext);

  if (home) {
    return (
      <div className={`flex flex-col gap-5 mt-10 mb-5`}>
        {projects?.slice(0, 3).map((project) => (
          <NavLink
            className={`flex rounded gap-2 border-zinc-400/40 border
             dark:border-zinc-400/20 h-60`}
            key={project.id}
            to={`projects/${project.name}`}
          >
            <section className={`w-1/2`}>
              <img
                className={`object-cover rounded-s w-full 
                  h-full border-r border-zinc-400/40`}
                src={project.img.url}
                alt={project.img.fileName}
              />
            </section>
            <section className='w-1/2 relative p-1'>
              <div className='flex flex-col gap-1'>
                <h3 className='dark:text-slate-50 text-black text-2xl font-bold'>
                  {project.name}
                </h3>
                <p
                  className={`tracking-tight text-justify text-ellipsis
                    overflow-hidden truncate`}
                >
                  {project.description}
                </p>
              </div>
              <div className='flex gap-2 absolute bottom-4 flex-wrap'>
                {project.topics.slice(-3).map((topic) => (
                  <p
                    className={`p-1 rounded-sm dark:text-contrast dark:bg-contrast/40
                    text-center bg-tertiary/40 text-contrast`}
                    key={topic}
                  >
                    {topic}
                  </p>
                ))}
              </div>
            </section>
          </NavLink>
        ))}
      </div>
    );
  }
  return (
    <div
      className={` 
        grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 
        my-14 gap-12
      `}
    >
      {projects?.map((project) => (
        <NavLink
          to={project.name}
          className={`
              hover:transition ease-in-out hover:scale-105 
              rounded-lg relative hover:duration-500
              md:w-full md:m-0 w-11/12 m-auto  h-96
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
            className={`lg:opacity-0 hover:opacity-100 hover:duration-500 bg-gradient-to-t
            from-zinc-800/60 to-transparent dark:from-zinc-900/50 dark:to-transparent
              w-full h-full rounded-lg absolute lg:px-5 mt:px-2 px-1 flex flex-col 
              gap-1 pb-6 justify-end
            `}
          >
            {project.img.fileName === 'back-end' && (
              <div className='mx-auto mb-14 flex flex-col items-center gap-1'>
                <span className='text-slate-50 mt:text-6xl text-5xl'>
                  APENAS
                </span>
                <span className='text-slate-50 mt:text-6xl text-5xl'>
                  BACK-END
                </span>
              </div>
            )}
            <h1 className='text-slate-50 lg:text-2xl text-xl font-bold'>
              {project.name}
            </h1>
            <p
              className={`text-sm text-zinc-300 
                tracking-tight text-justify text-ellipsis 
                overflow-hidden truncate`}
            >
              {project.description}
            </p>
            <div
              className={`
                flex flex-wrap lg:gap-3 gap-1 mt-3 lg:text-sm text-xs
              `}
            >
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
