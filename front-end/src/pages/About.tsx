import { useState, type ReactElement, useEffect } from 'react';
import Header from '../components/Header';
import SocialMedias from '../components/SocialMedias';
import perfil from '../imgs/perfil.jpg';
import Loading from '../components/Loading';

function About(): ReactElement {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
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
    <>
      <Header />
      <div
        className={`
          grid lg:grid-cols-2 
          lg:p-6 lg:mx-10 md:p-3 md:mx-5 p-2 mx-3 pb-10
          lg:pt-60 md:pt-48 pt-48 gap-10 justify-center
        `}
      >
        <section className='flex justify-center items-center z-40'>
          <img
            src={perfil}
            alt=''
            className='z-10 rounded-md md:w-96 w-80 md:h-96 h-80 object-cover rotate-3'
          />
        </section>
        <section
          className={`
            flex lg:order-first row-span-2 flex-col gap-2 flex-wrap
        `}
        >
          <p className='text-lg dark:text-contrast text-tertiary tex'>
            . . /sobre mim
          </p>
          <h1
            className={`
              dark:text-slate-50 text-black
              xl:text-5xl md:text-4xl text-3xl
              dark:border-zinc-400/20 border-zinc-400/40 border-b 
              md:pb-7 pb-4
            `}
          >
            Sou um desenvolvedor full-stack no início da minha carreira, mas com
            muitos sonhos e força de vontade.
          </h1>
          <div className='flex flex-col w-full mt-10 gap-8'>
            <p>
              A tecnologia sempre foi a minha paixão, desde a infância. Eu
              passava horas na frente do computador, jogando clássicos como GTA
              San Andreas, Donkey Kong e Call of Duty, navegando na internet em
              busca de novidades para conversar e compartilhar com meus amigos
              nas redes sociais e fazendo trabalhos escolares com Word ou
              PowerPoint, que me introduziram ao uso de ferramentas digitais.
            </p>
            <p>
              Quando conclui o ensino médio, estava claro que meu futuro
              profissional envolveria tecnologia. Decidi, então, focar nos
              estudos em programação e me matriculei na Trybe, uma escola
              especializada em desenvolvimento web. Com dedicação e empenho, fui
              aprovado no processo seletivo e tive a oportunidade de aprimorar
              meus conhecimentos em diversas tecnologias, aplicando-os em
              projetos práticos e desafiadores.
            </p>
            <p>
              Atualmente, estou me aperfeiçoando e trabalhando em projetos que
              agreguem valor ao meu portfólio e a mim como profissional, pois
              sei que ainda estou no início da minha carreira e tenho muito a
              conquistar e desenvolver. A paixão pela tecnologia continua me
              impulsionando, assim como a busca por novos desafios que permitem
              expandir meus conhecimentos e habilidades. Estou comprometido em
              crescer e evoluir constantemente nesta área que tanto me fascina.
            </p>
          </div>
        </section>
        <section
          className={`flex justify-center border-t lg:border-none     
            dark:border-zinc-400/20 border-zinc-400/40
          `}
        >
          <SocialMedias />
        </section>
      </div>
    </>
  );
}

export default About;
