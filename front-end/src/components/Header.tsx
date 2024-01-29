import { type ReactElement, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PortfolioContext from '../context/PortfolioContext';
import perfil from '../imgs/perfil.jpg';
import { BsMoonStars } from 'react-icons/bs';
import { MdOutlineWbSunny, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavigateBar from './NavigateBar';

interface IPropsHeader {
  home?: boolean;
}

function Header({ home }: IPropsHeader): ReactElement {
  const isHome = home === true;
  const animation = `translate-y-80 -translate-x-28 duration-700 ease-in-out scale-[7]`;
  const {
    setToggleBaseColors,
    toggleBaseColors,
    floatingMenu,
    setFloatingMenu,
  } = useContext(PortfolioContext);

  useEffect(() => {
    // animação buga quando troca de resolução (troca de tela)
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('#profile-picture', {
      y: 0,
      x: 0,
      borderRadius: 100,
      scale: 1,
      scrollTrigger: {
        trigger: '#profile-picture',
        start: 'top 220rem',
        end: 'bottom 490rem',
        markers: false,
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf('#profile-picture');
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('#header-container', {
      // #header-container
      opacity: 0,
      scrollTrigger: {
        trigger: '#header-container',
        start: 'bottom 10rem',
        markers: false,
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf('#header-container');
    };
  }, []);

  return (
    <header
      id='header-container'
      className={`flex fixed items-center pb-28
        ${!home && 'flex-row-reverse'} p-6
        duration-500 ease-in-out transition-opacity opacity-100
        justify-between 
        xl:mx-10 xl:w-[85%] lg:mx-8 lg:w-[81.8%] md:w-[86%] w-full
        `}
    >
      <section
        className={`flex ${home && 'flex-row-reverse'} justify-end gap-2`}
      >
        <button
          onClick={() => {
            setFloatingMenu(!floatingMenu);
          }}
          className={`
          dark:bg-zinc-900 h-10 px-4 py-2 rounded-full  
          flex items-center gap-1 justify-center 
          md:hidden
          dark:text-slate-50 dark:shadow dark:shadow-zinc-800
          shadow-box-shadow text-black
        `}
        >
          <span className='ml-1'>Menu</span>
          <MdOutlineKeyboardArrowDown />
        </button>
        <div>
          <button
            className='rounded-full w-14 h-10 flex justify-center items-center
            dark:hover:ring-1 hover:bg-slate-50 dark:hover:bg-zinc-900
          dark:hover:ring-zinc-700 shadow-md
            dark:shadow dark:shadow-zinc-800 dark:bg-zinc-900'
            onClick={() => {
              setToggleBaseColors(
                toggleBaseColors === 'dark' ? 'light' : 'dark',
              );
            }}
          >
            {toggleBaseColors === 'dark' ? (
              <BsMoonStars />
            ) : (
              <MdOutlineWbSunny className='text-contrast' />
            )}
          </button>
        </div>
      </section>
      <NavigateBar />
      <section>
        <NavLink className='' to='/'>
          <div
            id='profile-picture'
            className={`rounded${
              isHome ? '' : '-full'
            } flex items-center justify-center
          ${isHome && animation}
          w-10 h-10 shadow-box-shadow bg-slate-50  dark:bg-zinc-800`}
          >
            <img
              id='profile-picture'
              className={`object-cover rounded${
                isHome ? '' : '-full w-9 h-9'
              } w-10 h-10 duration-700 ease-in-out`}
              src={perfil}
              alt='perfil'
            />
          </div>
        </NavLink>
      </section>
    </header>
  );
}

export default Header;
