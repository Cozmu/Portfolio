import { type ReactElement, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import { TbBrandLinkedin, TbBrandGithub } from 'react-icons/tb';
import { MdOutlineWhatsapp } from 'react-icons/md';
import PortfolioContext from '../context/PortfolioContext';

function SocialMedias(): ReactElement {
  const { contactCard, setPulseContactCard } = useContext(PortfolioContext);

  const scrollToContactField = (): void => {
    if (contactCard instanceof Element) {
      setPulseContactCard(true);
      contactCard.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='flex mt-48 w-3/5 gap-4 items-center'>
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
      <div>
        <NavLink
          to='https://www.linkedin.com/in/jorge-reis-dev/'
          target='_black'
        >
          <TbBrandLinkedin
            className={`hover:scale-110 hover:duration-300 w-6 h-6 
             hover:text-black hover:dark:text-white`}
          />
        </NavLink>
      </div>
      <div>
        <NavLink to='https://github.com/Cozmu' target='_black'>
          <TbBrandGithub
            className={`hover:scale-110 hover:duration-300 w-6 h-6
             hover:text-black hover:dark:text-white`}
          />
        </NavLink>
      </div>
      <div>
        <NavLink to='https://wa.me/5593988078317' target='_black'>
          <MdOutlineWhatsapp
            className={`hover:scale-110 hover:duration-300 w-6 h-6
             hover:text-black hover:dark:text-white`}
          />
        </NavLink>
      </div>
    </section>
  );
}

export default SocialMedias;
