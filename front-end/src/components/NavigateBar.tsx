import { useContext, type ReactElement, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import PortfolioContext from '../context/PortfolioContext';
import Nav from './Nav';
import { useLocation } from 'react-router-dom';

function NavigateBar(): ReactElement {
  const { floatingMenu, setFloatingMenu } = useContext(PortfolioContext);
  const { pathname } = useLocation();

  useEffect(() => {
    setFloatingMenu(false);
  }, [pathname]);

  const handleResize = (): void => {
    if (window.innerWidth >= 768) {
      setFloatingMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (floatingMenu) {
    return (
      <div className='md:hidden'>
        <div
          className={`
            fixed inset-0 z-50 bg-zinc-800/40 
            backdrop-blur-sm dark:bg-black/80
            `}
        />
        <div
          className={`fixed inset-x-4 top-8 z-50 origin-top rounded-3xl
           bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800
          `}
        >
          <section className='flex w-full justify-between mb-3 items-center'>
            <h4 className='dark:text-slate-50 text-black'>Navegação</h4>
            <button
              className='w-5'
              onClick={() => {
                setFloatingMenu(!floatingMenu);
              }}
            >
              <IoClose className='w-full h-full' />
            </button>
          </section>
          <section className='h-28'>
            <Nav mobile={true} />
          </section>
        </div>
      </div>
    );
  }
  return <Nav />;
}

export default NavigateBar;
