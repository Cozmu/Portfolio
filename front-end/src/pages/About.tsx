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
          <Loading measures={{ W: 'w-5', H: 'h-5' }} />
        </section>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className='flex p-6 mx-10 pt-60 gap-10 justify-center'>
        <section className='w-1/2 flex flex-col gap-2 flex-wrap'>
          <p className='text-lg dark:text-contrast text-tertiary tex'>
            . . /sobre mim
          </p>
          <h1 className='dark:text-slate-50 text-black text-5xl'>
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
