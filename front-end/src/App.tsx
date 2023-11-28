import { type ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Certificates from './pages/Certificates';
import Projects from './pages/Projects';
import About from './pages/About';
import ProjectDetails from './pages/ProjectDetails';

function App(): ReactElement {
  return (
    <main
      className={`bg-gray-50 dark:bg-black text-zinc-600
       dark:text-zinc-400  font-Oswald min-h-screen`}
    >
      <div
        className='w-11/12 px-6 m-auto
        shadow-md bg-white
        ring-1 ring-zinc-100 dark:ring-zinc-100/10 min-h-screen 
        dark:bg-main-dark'
      >
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={About} />
          <Route path='/certificates' Component={Certificates} />
          <Route path='/projects' Component={Projects} />
          <Route path='/projects/:projectName' Component={ProjectDetails} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
