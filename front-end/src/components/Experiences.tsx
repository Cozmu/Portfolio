import { useEffect, type ReactElement, useRef, useState } from 'react';
import { experiences, type Iexperience } from '../service/date';

function Experiences(): ReactElement {
  const elementRef = useRef(null);
  const [currentExperience, setCurrentExperience] = useState<Iexperience[]>([]);

  useEffect(() => {
    setCurrentExperience(experiences);
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
      dark:border-zinc-400/20 border-zinc-400/40 
        rounded h-full flex-col gap-2`}
    >
      <p className='text-lg dark:text-contrast text-contrast'>
        . . /experiências
      </p>
      <h3 className='text-black dark:text-white lg:text-3xl text-2xl'>
        Experiências Profissionais
      </h3>
      {currentExperience.length >= 1 ? (
        <section className='w-full flex items-center justify-center h-60'>
          {currentExperience.map((experience) => (
            <div key={experience.id}>
              <h4 className='text-lg dark:text-contrast text-contrast'>
                {experience.endTime}
              </h4>
            </div>
          ))}
        </section>
      ) : (
        <div className='w-full flex items-center justify-center h-60'>
          <p
            ref={elementRef}
            className={`w-[9ch] whitespace-nowrap overflow-hidden 
            text-center text-lg border-r-2 dark:border-contrast border-tertiary`}
          >
            Em breve...
          </p>
        </div>
      )}
    </div>
  );
}

export default Experiences;
