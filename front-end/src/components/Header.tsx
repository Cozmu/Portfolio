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
    const zipData = await fetchZipFile('http://localhost:3001/images/projects');
    const zip = await JSZip.loadAsync(zipData);
    const fileNames = Object.keys(zip.files);

    const imageUrls = await Promise.all(
      fileNames.map(async (fileName) => {
        const file = zip.files[fileName];
        const blob = await file.async('blob');
        return URL.createObjectURL(blob);
      }),
    );

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
