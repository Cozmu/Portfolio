import { type ReactElement, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PortfolioContext from '../context/PortfolioContext';
import perfil from '../imgs/perfil.jpg';
import { BsMoonStars } from 'react-icons/bs';

interface IPropsHeader {
  home?: boolean;
}

function Header({ home }: IPropsHeader): ReactElement {
  const { setToggleBaseColors, toggleBaseColors } =
    useContext(PortfolioContext);
  const { pathname } = useLocation();

  return (
    <header className='flex items-center justify-between p-6'>
      <div className=''>
        <img
          className='object-cover rounded-full w-10 h-10'
          src={perfil}
          alt='perfil'
        />
      </div>
      <nav
        className='dark:bg-zinc-900 w-1/4 flex items-center
          h-10 rounded-full justify-around text-sm 
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
          }relative hover:text-tertiary h-full flex items-center`}
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
          }relative hover:text-tertiary h-full flex items-center`}
          to='/certificates'
        >
          Certificados
          {pathname === 'certificates' && (
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
           dark:hover:ring-1 dark:hover:ring-zinc-700
           dark:shadow dark:shadow-zinc-800 dark:bg-zinc-900'
          onClick={() => {
            setToggleBaseColors(toggleBaseColors === 'dark' ? 'light' : 'dark');
          }}
        >
          {toggleBaseColors === 'dark' ? <BsMoonStars /> : 'light'}
        </button>
      </div>
    </header>
  );
}

export default Header;
