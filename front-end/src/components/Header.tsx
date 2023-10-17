import { type ReactElement, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header(): ReactElement {
  const [img, setImg] = useState<string>();

  const response = async (): Promise<string> => {
    const result = await fetch('http://localhost:3001/imagens/Delivery-App');
    return result;
  };

  useEffect(() => {
    response()
      .then((result) => {
        setImg(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
