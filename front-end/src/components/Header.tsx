import { type ReactElement, useContext, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PortfolioContext from '../context/PortfolioContext';
import perfil from '../imgs/perfil.jpg';
import { BsMoonStars } from 'react-icons/bs';
import { MdOutlineWbSunny } from 'react-icons/md';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

interface IPropsHeader {
  home?: boolean;
}

function Header({ home }: IPropsHeader): ReactElement {
  const { setToggleBaseColors, toggleBaseColors } =
    useContext(PortfolioContext);
  const { pathname } = useLocation();
  const reference = useRef(null);

  useEffect(() => {
    const el = reference.current;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top center',
          end: 'botton center',
          scrub: true,
          markers: true,
        },
      })
      .set(el, {
        scale: 2, // diminui o tamanho em metade
        y: 100, // move o elemento para baixo em 100 pixels
        borderRadius: '5px', // começa com bordas arredondadas de 5px
      })
      .to(el, {
        scale: 1,
        y: -100,
        borderRadius: '100%',
        ease: 'power3.out',
      });
  }, []);

  return (
    <header className='flex items-center justify-between p-6 mx-10'>
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
          shadow-box-shadow
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
      <NavLink className='' to='/' ref={reference}>
        <div
          className='
            rounded-full flex items-center justify-center
            w-10 h-10 shadow-box-shadow bg-slate-50  dark:bg-zinc-800'
        >
          <img
            className=' object-cover rounded-full w-9 h-9'
            src={perfil}
            alt='perfil'
          />
        </div>
      </NavLink>
    </header>
  );
}

export default Header;
