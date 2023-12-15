import { type ReactElement } from 'react';
import Header from '../components/Header';
import { certificates } from '../service/date';
import { NavLink } from 'react-router-dom';
import { FaPaperclip } from 'react-icons/fa6';

function Certificates(): ReactElement {
  return (
    <div className=''>
      <Header />
      <div className='p-6 mx-10 pt-56'>
        <section className='flex flex-col gap-2 mb-11'>
          <p className='text-lg text-contrast'>. . /certificados</p>
          <h1 className='text-black dark:text-white text-3xl'>
            Minhas Certificações estudantis
          </h1>
        </section>
        <ul
          className={`flex flex-col gap-14 relative
            before:content-[''] before:absolute before:top-1 before:bg-zinc-500 
            before:w-[1px] before:h-full before:left-6
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
                className={`pl-9 ml-4 relative
                before:content-[''] before:absolute before:top-1 before:bg-main-dark 
                before:w-4 before:h-4 before:left-0 before:rounded-full before:border-2
                before:border-zinc-300
              `}
                key={id}
              >
                <p
                  className={`dark:text-white flex items-center gap-1 text-black `}
                >
                  <NavLink
                    className={`relative
                    after:content-[''] after:w-0 after:h-[1px] 
                  after:bg-white after:absolute after:left-0 after:bottom-0
                    after:hover:w-full after:ease-in-out after:duration-300 
                    after:transition-width
                  `}
                    to={link}
                    target='_black'
                  >
                    {title}
                  </NavLink>
                  <FaPaperclip />
                </p>
                <p>{issuingOrganization}</p>
                <p>{emission}</p>
                <p className='w-2/4'>{description}</p>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}

export default Certificates;
