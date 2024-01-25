import { useEffect, type ReactElement, useState } from 'react';
import Header from '../components/Header';
import { certificates } from '../service/date';
import { NavLink } from 'react-router-dom';
import { FaPaperclip } from 'react-icons/fa6';
import Loading from '../components/Loading';

function Certificates(): ReactElement {
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
    <div className='pb-20'>
      <Header />
      <div className='md:px-6 px-4 md:mx-10 md:pt-56 pt-32'>
        <section className='flex flex-col md:gap-2 gap-1 md:mb-11 mb-14'>
          <p className='text-lg dark:text-contrast text-tertiary'>
            . . /certificados
          </p>
          <h1 className='md:text-3xl text-2xl text-black dark:text-white '>
            Minhas Certificações estudantis
          </h1>
        </section>
        <ul
          className={`flex flex-col gap-14 relative
            before:content-[''] before:absolute before:top-1
            before:dark:bg-zinc-500 before:bg-zinc-400/60
            before:w-[1px] before:h-full before:md:left-6 before:left-2
        `}
        >
          {certificates.map(
            ({
              id,
              title,
              issuingOrganization,
              emission,
              description,
              link,
            }) => (
              <li
                className={`md:pl-9 pl-4 ml-4 relative flex flex-col gap-1
                before:content-[''] before:absolute before:top-1 
                before:w-4 before:h-4 before:-left-4 before:md:left-0
                before:rounded-full before:border-2
                before:dark:bg-main-dark before:dark:border-zinc-300
                before:border-main-dark before:bg-white
              `}
                key={id}
              >
                <p
                  className={`
                  dark:text-white flex items-center gap-1 text-black 
                  `}
                >
                  <NavLink
                    className={`relative
                    after:content-[''] after:w-0 after:h-[1px] 
                  after:dark:bg-white after:bg-black after:absolute 
                    after:left-0 after:bottom-0 after:hover:w-full 
                    after:ease-in-out after:duration-300 after:transition-width
                  `}
                    to={link}
                    target='_black'
                  >
                    {title}
                  </NavLink>
                  <FaPaperclip />
                </p>
                <p className='text-[15px]'>{issuingOrganization}</p>
                <p
                  className={`border-l-2 pl-4 dark:text-zinc-600 dark:border-zinc-400/30
                    w-2/4 border-zinc-300 text-zinc-400
                  `}
                >
                  {emission}
                </p>
                <p className='xl:w-2/4'>{description}</p>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}

export default Certificates;
