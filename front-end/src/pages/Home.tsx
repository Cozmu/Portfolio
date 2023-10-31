import { type ReactElement, useEffect } from 'react';
import Header from '../components/Header';
import request from '../service/APIgithub';

function HomePage(): ReactElement {
  const response = async (): Promise<object[]> => {
    const x = request();
    return await x;
  };

  useEffect(() => {
    response()
      .then((result) => {})
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Header />
      <p>HomePage</p>
    </div>
  );
}

export default HomePage;
