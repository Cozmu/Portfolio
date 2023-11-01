import { type ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';

function App(): ReactElement {
  return (
    <div className='font-Bebas'>
      <Routes>
        <Route path='/' Component={HomePage} />
      </Routes>
    </div>
  );
}

export default App;
