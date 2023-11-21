import { type ReactElement } from 'react';
import Header from '../components/Header';
import SocialMedias from '../components/SocialMedias';
import SkillsCards from '../components/SkillsCards';
import ContactCard from '../components/ContactCard';
import Highlights from '../components/Highlights';
import Experiences from '../components/Experiences';

function HomePage(): ReactElement {
  return (
    <main
      className='w-11/12 h-screen px-6 m-auto
       dark:bg-main dark:border-x-white'
    >
      <Header home={true} />
      <section>
        <h1>Olá, meu nome e Jorge Wellington</h1>
        <div className='w-1/2'>
          <p className='text-lg w-full'>
            Sou um
            <span className='dark:text-slate-50'>
              {' '}
              Desenvolvedor Full-Stack
            </span>
            <span> com </span>
            <span> especialidades </span>
            <span className='dark:text-slate-50'>
              JavaScript/Typescript e Node com Express
            </span>
            . Para
            <span className='dark:text-slate-50'> Front-End, </span>
            tenho conhecimentos em
            <span className='dark:text-slate-50'> React.js, Redux </span>
            <span> e </span>
            começando meus estudos em
            <span className='dark:text-slate-50'> Tailwind.</span>
            <span> Para </span>
            <span className='dark:text-slate-50'> Back-End, </span>
            domino a manipulação e coordenação de APIs e bancos de dados, tanto
            relacionais quanto não relacionais,
            <span> utilizando </span>
            <span className='dark:text-slate-50'>
              MySQL com Sequelize, MongoDB com Mongoose.
            </span>
            <span> Estou </span>
            100% disposto a iniciar minha carreira e fazer a diferença na área
            da
            <span> tecnologia. </span>
            <span className='text-slate-50'>
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
    </main>
  );
}

export default HomePage;
