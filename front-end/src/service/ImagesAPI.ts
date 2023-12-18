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
  projectName: string,
  router: string,
): Promise<IunzipFile[]> => {
  const urlRost = 'https://ap-portfolio-uej5.onrender.com';
  const zipData = await fetchZipFile(
    // eslint-disable-next-line max-len
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

      return { fileName, url };
    }),
  );

  return imageUrls;
};

export default unzipFile;
