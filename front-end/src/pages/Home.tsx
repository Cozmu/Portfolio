import { useEffect, type ReactElement } from 'react';
import Header from '../components/Header';
import SocialMedias from '../components/SocialMedias';
import SkillsCards from '../components/SkillsCards';
import ContactCard from '../components/ContactCard';
import Highlights from '../components/Highlights';
import Experiences from '../components/Experiences';
import skills from '../service/date';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function HomePage(): ReactElement {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('#header-container', {
      display: 'none',
      scrollTrigger: {
        trigger: '#description',
        start: 'center 60rem',
        end: 'center 60rem',
        markers: false,
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf('#header-container');
    };
  }, []);

  return (
    <>
      <Header home={true} />
      <section
        className={`
          lg:p-6 p-[4px] py-6 md:p-3 
          lg:mx-10 mx-5
        `}
      >
        <div className='md:mt-52 mt-28'>
          <p className='text-contrast w-full text-lg'>Olá, meu nome é</p>
          <h1
            id='name'
            className={`
              xl:text-7xl lg:text-6xl md:text-5xl text-4xl
              pb-6 dark:text-slate-50 text-black
            `}
          >
            Jorge Wellington...
          </h1>
        </div>
        <div className='lg:w-3/5 md:w-1/2'>
          <p
            id='description'
            className={`
              lg:text-lg w-full
              `}
            // md:max-lg:tracking-tight md:max-lg:text-justify md:max-lg:text-ellipsis
          >
            Sou um
            <span className='dark:text-slate-50 text-black'>
              {' '}
              Desenvolvedor Full-Stack
            </span>
            <span> com </span>
            <span> especialidades </span>
            <span className='dark:text-slate-50 text-black'>
              JavaScript/Typescript e Node com Express
            </span>
            . Para
            <span className='dark:text-slate-50 text-black'> Front-End, </span>
            tenho conhecimentos em
            <span className='dark:text-slate-50 text-black'>
              {' '}
              React.js, Redux
            </span>
            <span> e </span>
            começando meus estudos em
            <span className='dark:text-slate-50 text-black'> Tailwind.</span>
            <span> Para </span>
            <span className='dark:text-slate-50 text-black'> Back-End, </span>
            domino a manipulação e coordenação de APIs e bancos de dados, tanto
            relacionais quanto não relacionais,
            <span> utilizando </span>
            <span className='dark:text-slate-50 text-black'>
              MySQL com Sequelize, MongoDB com Mongoose.
            </span>
            <span> Estou </span>
            100% disposto a iniciar minha carreira e fazer a diferença na área
            da
            <span> tecnologia. </span>
            <span className='dark:text-slate-50 text-black'>
              Prontos para trabalharmos juntos?
            </span>
          </p>
        </div>
        <div className='flex flex-col'>
          <section id='skills' className='flex gap-4 py-4 mt-2'>
            {skills
              .filter(({ name }) => name === 'TypeScript' || name === 'NodeJS')
              .map(({ id, name }) => (
                <div
                  className={`p-1 rounded h-8 w-20 text-center
                   dark:text-contrast dark:bg-contrast/40 bg-tertiary/40 text-contrast`}
                  key={id}
                >
                  <p className='w-full h-full'>{name}</p>
                </div>
              ))}
          </section>
          <SocialMedias home={true} />
        </div>
      </section>
      <section
        className={`
          lg:p-6 md:p-3 py-6
          lg:mx-10 mx-5
          border-t dark:border-zinc-400/20 
          mb-10 border-zinc-400/40 flex flex-col gap-3
        `}
      >
        <p className='text-lg dark:text-contrast text-tertiary'>
          . . /conhecimentos
        </p>
        <h3
          className={`
            text-3xl 
            mb-11 text-black dark:text-white 
          `}
        >
          Competências
        </h3>
        <SkillsCards />
      </section>
      <section
        className={`
          lg:p-6 md:p-3 py-6
          lg:mx-10 mx-5 
          border-t dark:border-zinc-400/20 border-zinc-400/40
          gap-8 grid xl:grid-cols-2 grid-cols-1 pb-20 
        `}
      >
        <Highlights />
        <Experiences />
        <ContactCard />
      </section>
    </>
  );
}

export default HomePage;
