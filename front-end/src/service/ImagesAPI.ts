import JSZip from 'jszip';
import { getBinaryContent } from 'jszip-utils';

interface IunzipFile {
  url: string;
  fileName: string;
}

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

const unzipFile = async (
  projectName: string | undefined,
  router: string,
): Promise<IunzipFile[]> => {
  // const urlRost = 'http://localhost:3001';
  const urlRost = 'https://ap-portfolio-uej5.onrender.com';
  const zipData = await fetchZipFile(
    `${urlRost}/images/${
      router === 'project-details' ? `${router}/${projectName}` : router
    }`,
  );
  const zip = await JSZip.loadAsync(zipData);
  const fileNames = Object.keys(zip.files);

  const imageUrls = await Promise.all(
    fileNames.map(async (fileName) => {
      const file = zip.files[fileName];
      const blob = await file.async('blob');
      const url = URL.createObjectURL(blob);
      const name = fileName.split('.');

      return { fileName: name[0], url };
    }),
  );

  return imageUrls;
};

export { type IunzipFile };
export default unzipFile;
