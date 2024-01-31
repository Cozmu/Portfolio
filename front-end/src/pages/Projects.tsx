import { type ReactElement, useEffect, useState } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import ProjectsCards from '../components/ProjectsCards';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Projects(): ReactElement {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1100);
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('#header-container', {
      display: 'none',
      scrollTrigger: {
        trigger: '#description',
        start: '38% 60rem',
        end: '38% 60rem',
        markers: false,
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf('#header-container');
    };
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
          <Loading measures={{ W: 'md:w-5 w-3', H: 'md:h-5 h-3' }} />
        </section>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div
        className={` 
          lg:px-6 md:px-3 py-6
          lg:mx-10 mx-5
          md:pt-52 pt-28
        `}
      >
        <section className='flex flex-col gap-2'>
          <p className='text-lg dark:text-contrast text-tertiary'>
            . . /projetos
          </p>
          <h1
            className={`text-black dark:text-white 
              lg:text-3xl text-2xl mb-11 border-b pb-4 
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
