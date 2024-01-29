import { type ReactElement, useContext, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PortfolioContext from '../context/PortfolioContext';
import perfil from '../imgs/perfil.jpg';
import { BsMoonStars } from 'react-icons/bs';
import { MdOutlineWbSunny, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface IPropsHeader {
  home?: boolean;
}

function Header({ home }: IPropsHeader): ReactElement {
  const isHome = home === true;
  const animation = `translate-y-80 -translate-x-28 duration-700 ease-in-out scale-[7]`;
  const { setToggleBaseColors, toggleBaseColors } =
    useContext(PortfolioContext);
  const { pathname } = useLocation();

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
        ${!home && 'flex-row-reverse'}
        duration-500 ease-in-out transition-opacity opacity-100
        justify-between p-6
        xl:mx-10 xl:w-[85%] lg:mx-8 lg:w-[81.8%] md:w-[86%] w-full
        `}
    >
      <div>
        <button
          className='rounded-full w-14 h-10 flex justify-center items-center
            dark:hover:ring-1 hover:bg-slate-50 dark:hover:bg-zinc-900
          dark:hover:ring-zinc-700 shadow-md
            dark:shadow dark:shadow-zinc-800 dark:bg-zinc-900'
          onClick={() => {
            setToggleBaseColors(toggleBaseColors === 'dark' ? 'light' : 'dark');
          }}
        >
          {toggleBaseColors === 'dark' ? (
            <BsMoonStars />
          ) : (
            <MdOutlineWbSunny className='text-contrast' />
          )}
        </button>
      </div>
      <button
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
      <nav
        className=' items-center justify-around
          md:w-2/5 lg:w-1/3 xl:w-1/4
          md:flex hidden flex-wrap
          h-10 rounded-full text-sm 
          shadow-box-shadow text-black
          dark:text-slate-50 dark:bg-zinc-900
          dark:shadow dark:shadow-zinc-800'
      >
        <div className='hidden'></div>
        <NavLink
          className={`${
            pathname === '/about' && 'text-tertiary'
          } relative hover:text-tertiary h-full flex items-center`}
          to='/about'
        >
          Sobre
          {pathname === '/about' && (
            <span
              className='absolute inset-x-0 -bottom-px h-px bg-gradient-to-r 
              from-tertiary/0 via-contrast to-tertiary/0 '
            />
          )}
        </NavLink>
        <NavLink
          className={`${
            pathname === '/projects' && 'text-tertiary'
          } relative hover:text-tertiary h-full flex items-center`}
          to='/projects'
        >
          Projetos
          {pathname === '/projects' && (
            <span
              className='absolute w-10 inset-x-0 
                -bottom-px h-px bg-gradient-to-r
                from-tertiary/0 via-contrast to-tertiary/0 '
            />
          )}
        </NavLink>
        <NavLink
          className={`${
            pathname === '/certificates' && 'text-tertiary'
          } relative hover:text-tertiary h-full flex items-center`}
          to='/certificates'
        >
          Certificados
          {pathname === '/certificates' && (
            <span
              className='absolute mx-auto w-10 inset-x-0 
            -bottom-px h-px bg-gradient-to-r 
            from-tertiary/0 via-contrast to-tertiary/0 '
            />
          )}
        </NavLink>
      </nav>
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
    </header>
  );
}

export default Header;
