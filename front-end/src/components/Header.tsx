import { type ReactElement, useContext, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PortfolioContext from '../context/PortfolioContext';
import perfil from '../imgs/perfil.jpg';
import { BsMoonStars } from 'react-icons/bs';
import { MdOutlineWbSunny } from 'react-icons/md';
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
      justify-between p-6 mx-10 w-10/12`}
    >
      <div>
        <button
          className='rounded-full w-14  h-10 flex justify-center items-center
            shadow-md hover:bg-slate-50
           dark:hover:ring-1 dark:hover:ring-zinc-700
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
      <nav
        className='dark:bg-zinc-900 w-1/4 flex items-center
          h-10 rounded-full justify-around text-sm 
          shadow-box-shadow text-black
          dark:text-slate-50
          dark:shadow dark:shadow-zinc-800'
      >
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
