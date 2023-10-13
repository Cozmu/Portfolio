import { type ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

function Header(): ReactElement {
  // const x = async (): Promise<object> => {
  //   // const endpoint =
  // `https://api.cloudinary.com/v1_1/${cloudName}/resources/image`;
  //   // const result = await fetch(endpoint, {
  //   //   headers: {
  //   //     Authorization: 'Basic ' + btoa(`${apiKey}:${apiSecret}`),
  //   //   },
  //   // });
  //   // return result;
  // };

  // useEffect(() => {
  //   x()
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error('Erro ao acessar a API do Cloudinary:', error);
  //     });
  // }, []);

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
