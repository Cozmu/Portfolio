import { type ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import './App.css';

function App(): ReactElement {
  return (
    <Routes>
      <Route path='/' Component={HomePage} />
    </Routes>
  );
}

export default App;
