import { type ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Certificates from './pages/Certificates';
import Projects from './pages/Projects';
import About from './pages/About';
import ProjectDetails from './pages/ProjectDetails';

function App(): ReactElement {
  return (
    <div
      className={`bg-gray-50 dark:bg-black
       dark:text-zinc-400 h-screen font-Oswald`}
    >
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
