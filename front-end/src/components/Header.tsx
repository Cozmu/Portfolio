import { type ReactElement, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import PortfolioContext from '../context/PortfolioContext';
import perfil from '../imgs/perfil.jpg';

interface IPropsHeader {
  home?: boolean;
}

function Header({ home }: IPropsHeader): ReactElement {
  const { setToggleBaseColors, toggleBaseColors } =
    useContext(PortfolioContext);
  return (
    <header className='flex items-center justify-between p-2'>
      <div>
        <img width={80} src={perfil} alt='perfil' />
      </div>
      <nav
        className='dark:bg-zinc-900 w-1/4 flex items-center
       h-12 rounded-full justify-around text-sm'
      >
        <NavLink to='/'>Sobre</NavLink>
        <NavLink to='/projetos'>Projetos</NavLink>
        <NavLink to='/certificados'>Certificados</NavLink>
      </nav>
      <div>
        <button
          onClick={() => {
            setToggleBaseColors(toggleBaseColors === 'dark' ? 'light' : 'dark');
          }}
        >
          DARCK/LIGHT
        </button>
      </div>
    </header>
  );
}

export default Header;
