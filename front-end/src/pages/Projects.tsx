import { type ReactElement, useEffect, useState } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import ProjectsCards from '../components/ProjectsCards';

function Projects(): ReactElement {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1100);
  }, []);

  if (isLoading) {
    return (
      <div>
        <Header />
        <section
          className={`flex h-screen mr-5
              items-center justify-center gap-1
              `}
        >
          <Loading measures={{ W: 'w-5', H: 'h-5' }} />
        </section>
      </div>
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
