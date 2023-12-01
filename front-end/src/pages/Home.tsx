import { type ReactElement } from 'react';
import Header from '../components/Header';
import SocialMedias from '../components/SocialMedias';
import SkillsCards from '../components/SkillsCards';
import ContactCard from '../components/ContactCard';
import Highlights from '../components/Highlights';
import Experiences from '../components/Experiences';

function HomePage(): ReactElement {
  return (
    <>
      <Header home={true} />
      <section className='p-6 mx-10'>
        <div className='mt-52'>
          <p className='text-contrast w-full text-lg'>Olá, meu nome é</p>
          <h1 className='text-7xl pb-6 dark:text-slate-50 text-black'>
            Jorge Wellington...
          </h1>
        </div>
        <div className='w-3/5'>
          <p className='text-lg w-full'>
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
        <SocialMedias />
      </section>
      <section>
        <SkillsCards />
      </section>
      <section>
        <nav>
          <ContactCard />
          <Highlights />
        </nav>
        <Experiences />
      </section>
    </>
  );
}

export default HomePage;
