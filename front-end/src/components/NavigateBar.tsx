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
        <div
          className={`
            fixed inset-0 z-50 bg-zinc-800/40 
            backdrop-blur-sm dark:bg-black/80
            `}
        />
        <div
          className={`fixed inset-x-4 top-8 z-50 origin-top rounded-3xl
           bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800
          `}
        >
          <section className='flex w-full justify-between'>
            <h4>Navegação</h4>
            <button
              onClick={() => {
                setFloatingMenu(!floatingMenu);
              }}
            >
              <IoClose />
            </button>
          </section>
          <ul>
            <li>eu uero</li>
            <li>eu uero</li>
            <li>eu uero</li>
            <li>eu uero</li>
            <li>eu uero</li>
          </ul>
        </div>
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
