import { useEffect, type ReactElement, useRef } from 'react';

function Experiences(): ReactElement {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-typing');
        } else {
          entry.target.classList.remove('animate-typing');
        }
      });
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`flex items-start justify-start p-3 border
       border-zinc-400/20 rounded h-full flex-col gap-2`}
    >
      <p className='text-lg dark:text-contrast text-contrast'>
        . . /experiências
      </p>
      <h3 className='text-black dark:text-white text-3xl'>
        Experiências Profissionais
      </h3>
      <div className='w-full flex items-center justify-center h-60'>
        <p
          ref={elementRef}
          className={`w-[9ch] whitespace-nowrap overflow-hidden 
            text-center text-lg border-r-2 dark:border-contrast border-tertiary`}
        >
          Em breve...
        </p>
      </div>
    </div>
  );
}

export default Experiences;
