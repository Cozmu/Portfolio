import { useContext, type ReactElement } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import PortfolioContext from '../context/PortfolioContext';

function NavigateBar(): ReactElement {
  const { pathname } = useLocation();
  const { floatingMenu, setFloatingMenu } = useContext(PortfolioContext);

  if (floatingMenu) {
    return (
      <div>
        <div className='md:hidden'></div>
        <button
          onClick={() => {
            setFloatingMenu(!floatingMenu);
          }}
        >
          <IoClose />
        </button>
      </div>
    );
  }
  return (
    <nav
      className=' items-center justify-around
      md:w-2/5 lg:w-1/3 xl:w-1/4
      md:flex hidden flex-wrap
      h-10 rounded-full text-sm 
      shadow-box-shadow text-black
      dark:text-slate-50 dark:bg-zinc-900
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
  );
}

export default NavigateBar;
