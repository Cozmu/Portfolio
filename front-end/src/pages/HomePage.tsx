import { type ReactElement } from 'react';
import Header from '../components/Header';

function HomePage(): ReactElement {
  return (
    <div>
      <Header />
      <p>HomePage</p>
    </div>
  );
}

export default HomePage;
