import { type ReactElement, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import { TbBrandLinkedin, TbBrandGithub } from 'react-icons/tb';
import { MdOutlineWhatsapp } from 'react-icons/md';
import PortfolioContext from '../context/PortfolioContext';

interface IPropsSocialMedias {
  home?: boolean;
}

function SocialMedias({ home }: IPropsSocialMedias): ReactElement {
  const { contactCard, setPulseContactCard } = useContext(PortfolioContext);

  const scrollToContactField = (): void => {
    if (contactCard instanceof Element) {
      setPulseContactCard(true);
      contactCard.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className={`flex lg:w-3/5 gap-4
      ${home && 'mt-48 items-center'}
      ${!home && 'flex-col mt-10'}
    `}
    >
      {home && (
        <div>
          <button
            onClick={scrollToContactField}
            className={`rounded-md bg-tertiary dark:bg-contrast p-1 w-36 
            hover:transition ease-in-out hover:scale-110 hover:duration-500
          text-black dark:text-white flex gap-2 items-center h-12 justify-center`}
          >
            Entre em Contato
            <FaArrowRightLong />
          </button>
        </div>
      )}
      <div>
        <NavLink
          className={`${!home && 'w-full flex gap-3'}
           hover:text-black hover:dark:text-white hover:duration-300
          `}
          to='https://www.linkedin.com/in/jorge-reis-dev/'
          target='_black'
        >
          <TbBrandLinkedin
            className={`w-6 h-6 ${home && 'hover:scale-110'} 
             `}
          />
          {!home && 'Me siga no Linkedin'}
        </NavLink>
      </div>
      <div>
        <NavLink
          className={`${!home && 'w-full flex gap-3'}
            hover:text-black hover:dark:text-white hover:duration-300
          `}
          to='https://github.com/Cozmu'
          target='_black'
        >
          <TbBrandGithub
            className={`w-6 h-6 ${home && 'hover:scale-110'}
             `}
          />
          {!home && 'Me siga no GitHub'}
        </NavLink>
      </div>
      <div>
        <NavLink
          className={`${!home && 'w-full flex gap-3'}
            hover:text-black hover:dark:text-white hover:duration-300
          `}
          to='https://wa.me/5593988078317'
          target='_black'
        >
          <MdOutlineWhatsapp
            className={`w-6 h-6 ${home && 'hover:scale-110'}
             `}
          />
          {!home && 'Entre em contato pelo WhatsApp'}
        </NavLink>
      </div>
    </section>
  );
}

export default SocialMedias;
