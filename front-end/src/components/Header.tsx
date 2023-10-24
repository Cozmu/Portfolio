import { type ReactElement, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import JSZip from 'jszip';
import { getBinaryContent } from 'jszip-utils';

function Header(): ReactElement {
  const [img, setImg] = useState<string[]>();

  const fetchZipFile = async (url: string): Promise<ArrayBuffer> => {
    return await new Promise<ArrayBuffer>((resolve, reject) => {
      getBinaryContent(url, (err, data) => {
        if (err !== null) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };

  const unzipFile = async (): Promise<string[]> => {
    const zipData = await fetchZipFile(
      'http://localhost:3001/imagens/Delivery-App',
    );

    // Cria uma instância do JSZip e carrega o arquivo ZIP
    const zip = await JSZip.loadAsync(zipData);

    // Obtém uma lista dos nomes dos arquivos no arquivo ZIP
    const fileNames = Object.keys(zip.files);

    // Filtra apenas os arquivos de imagem (por exemplo, .jpg, .png, .jpeg)
    const imageFiles = fileNames.filter((fileName) =>
      /\.(jpg|jpeg|png)$/i.test(fileName),
    );

    // Obtém URLs das imagens do arquivo ZIP
    const imageUrls = await Promise.all(
      imageFiles.map(async (fileName) => {
        const file = zip.files[fileName];
        const blob = await file.async('blob');
        return URL.createObjectURL(blob);
      }),
    );

    // console.log('URLs das imagens:', imageUrls);
    return imageUrls;
  };

  useEffect(() => {
    unzipFile()
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
          <img src={urlDoArquivo} alt='' width={200} />
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
