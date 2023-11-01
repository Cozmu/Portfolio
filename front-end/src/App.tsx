import { type ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Certificates from './pages/Certificates';
import Projects from './pages/Projects';
import About from './pages/About';
import ProjectDetails from './pages/ProjectDetails';

function App(): ReactElement {
  return (
    <div className='font-Bebas bg-body text-slate-100 h-screen'>
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={About} />
        <Route path='/certificates' Component={Certificates} />
        <Route path='/projects' Component={Projects} />
        <Route path='/projects/:projectName' Component={ProjectDetails} />
      </Routes>
    </div>
  );
}

export default App;
