import { type ReactElement, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header(): ReactElement {
  const [img, setImg] = useState<string[]>();

  // fix
  const response = async (): Promise<string[]> => {
    const response = await fetch('http://localhost:3001/imagens/Delivery-App');
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
      {img?.map((urlDoArquivo, index) => (
        <div key={index}>
          <img src={urlDoArquivo} alt='' />
        </div>
      ))}
      <nav>
        <NavLink to='/'>Sobre</NavLink>
        <NavLink to='/projetos'>Projetos</NavLink>
        <NavLink to='/certificados'>Certificados</NavLink>
      </nav>
    </header>
  );
}

export default Header;
