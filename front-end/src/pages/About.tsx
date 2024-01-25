import { type ReactElement } from 'react';
import Header from '../components/Header';
import SocialMedias from '../components/SocialMedias';
import perfil from '../imgs/perfil.jpg';

function About(): ReactElement {
  return (
    <>
      <Header />
      <div className='flex p-6 mx-10 pt-40 gap-10 justify-center'>
        <section className='w-1/2 flex flex-col gap-2'>
          <p className='text-lg dark:text-contrast text-tertiary tex'>
            . . /sobre mim
          </p>
          <h1 className='text-slate-50 text-5xl'>
            Sou um desenvolvedor full-stack no início da minha carreira, mas com
            muitos sonhos e força de vontade.
          </h1>
          <div>
            <p>infancia: primeiros contatos com a tecnologia e sonhos</p>
            <p>
              formação: como cheguei ao ponto de querer seguir essa carreira e
              como adiquiri meus conhecimentos que eu tenho hoje
            </p>
            <p>
              objetivos: como eu quero ser daqui pra frente e como eu posso
              agregar valor
            </p>
            <p></p>
          </div>
        </section>
        <section className='w-1/2  flex flex-col justify-between items-center'>
          <img
            src={perfil}
            alt=''
            className='rounded-md w-96 h-96 object-cover rotate-3'
          />
          <SocialMedias />
        </section>
      </div>
    </>
  );
}

export default About;
