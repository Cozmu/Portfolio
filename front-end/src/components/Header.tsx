import { type ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

function Header(): ReactElement {
  return (
    <header>
      <nav>
        <NavLink to='/'>Sobre</NavLink>
        <NavLink to='/projetos'>Projetos</NavLink>
        <NavLink to='/certificados'>Certificados</NavLink>
      </nav>
    </header>
  );
}

export default Header;
