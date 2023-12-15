import { useContext, type ReactElement, useEffect } from 'react';
import Header from '../components/Header';
import PortfolioContext from '../context/PortfolioContext';
import filterDate from '../service/APIgithub';
import unzipFile from '../service/ImagesAPI';

function Projects(): ReactElement {
  const { setProjects } = useContext(PortfolioContext);

  const serviceAPI = async (): Promise<object[]> => {
    const imgRequest = await unzipFile();
    const result = await filterDate();
    console.log(result);
    console.log(imgRequest);
    return result;
  };

  useEffect(() => {
    serviceAPI()
      .then((resultRequest) => {
        setProjects(resultRequest);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header />
      Projects
    </div>
  );
}

export default Projects;
