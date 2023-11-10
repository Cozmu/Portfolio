import { type ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

interface IPropsHeader {
  home?: boolean;
}

function Header({ home }: IPropsHeader): ReactElement {
  return (
    <header>
      <nav>
        <NavLink to='/'>Sobre</NavLink>
        <NavLink to='/projetos'>Projetos</NavLink>
        <NavLink to='/certificados'>Certificados</NavLink>
      </nav>
      <div>
        <button>DARCK/LIGHT</button>
      </div>
    </header>
  );
}

export default Header;
