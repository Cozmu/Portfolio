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
  const urlRost = 'http://localhost:8903'; // http://localhost:8903
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
      const name = fileName.split('.');

      return { fileName: name[0], url };
    }),
  );
  // console.log('B', imageUrls);

  return imageUrls;
};

export { type IunzipFile };
export default unzipFile;
