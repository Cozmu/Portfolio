import { type ReactElement, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import PortfolioContext from '../context/PortfolioContext';

interface IPropsHeader {
  home?: boolean;
}

function Header({ home }: IPropsHeader): ReactElement {
  const { setToggleBaseColors, toggleBaseColors } =
    useContext(PortfolioContext);
  return (
    <header>
      <nav>
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
