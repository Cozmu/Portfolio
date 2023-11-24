import { type ReactElement, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PortfolioContext from '../context/PortfolioContext';
import perfil from '../imgs/perfil.jpg';
import { BsMoonStars } from 'react-icons/bs';
import { MdOutlineWbSunny } from 'react-icons/md';

interface IPropsHeader {
  home?: boolean;
}

function Header({ home }: IPropsHeader): ReactElement {
  const { setToggleBaseColors, toggleBaseColors } =
    useContext(PortfolioContext);
  const { pathname } = useLocation();

  return (
    <header className='flex items-center justify-between p-6 mx-10'>
      <NavLink className='' to='/'>
        <div
          className='class-animation
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
      <nav
        className='dark:bg-zinc-900 w-1/4 flex items-center
          h-10 rounded-full justify-around text-sm 
          shadow-box-shadow
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
    </header>
  );
}

export default Header;
