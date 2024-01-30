import { type ReactElement } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface IPropsNav {
  mobile?: boolean;
}

function Nav({ mobile }: IPropsNav): ReactElement {
  const { pathname } = useLocation();

  return (
    <nav
      className={`items-center justify-around
      md:w-2/5 lg:w-1/3 xl:w-1/4
      md:flex md:flex-row ${!mobile && 'hidden'}
      h-10 rounded-full text-sm flex-col
      md:shadow-box-shadow text-black
      dark:text-slate-50 md:dark:bg-zinc-900
      md:dark:shadow md:dark:shadow-zinc-800`}
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

export default Nav;
