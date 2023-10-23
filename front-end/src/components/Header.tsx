import { type ReactElement, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import unzipper from 'unzipper';

function Header(): ReactElement {
  const [img, setImg] = useState<string[]>();

  // fix
  const response = async (): Promise<string[]> => {
    const response = await fetch('http://localhost:3001/imagens/Delivery-App');
    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const directory = await unzipper.Open.buffer(arrayBuffer);
    const listaDeArquivos = Object.keys(directory.files)
      .map((nomeDoArquivo) => {
        const arquivo = directory.files[nomeDoArquivo];
        if (arquivo.type === 'File') {
          const blob = new Blob([arquivo._fs.readFileSync()]);
          const urlDoArquivo = URL.createObjectURL(blob);
          return urlDoArquivo;
        }
        return '';
      })
      .filter(Boolean);
    return listaDeArquivos;
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
