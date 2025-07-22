import { useEffect, type ReactElement, useRef, useState } from 'react';
import { experiences, type Iexperience, mesesPt } from '../service/date';
import formattedDate from '../service/formattedDate';

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

  const getMonthName = (index: string): string => {
    return mesesPt[Number(index) - 1] || '';
  };

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
        <div className='relative'>
          <section
            className={`w-full flex flex-col h-60 px-5 py-2
            before:content-[''] before:absolute before:top-5
            before:dark:bg-zinc-500 before:bg-zinc-400/60
            before:w-[1px] md:before:h-[60%] before:h-[75%] before:md:left-6 before:left-2
        `}
          >
            {currentExperience.map((experience) => (
              <div
                key={experience.id}
                className={`
                  before:content-[''] before:absolute before:top-4 
                  before:w-4 before:h-4 before:-left-0 before:md:left-4
                  before:rounded-full before:border-2
                  before:dark:bg-main-dark before:dark:border-zinc-300
                  before:border-main-dark before:bg-white
                  w-full px-5 flex flex-col gap-1
                `}
              >
                <h4 className='md:text-xl text-black dark:text-white'>
                  {`${experience.position} - ${experience.enterprise}`}
                </h4>
                <ul
                  className={`
                      flex gap-1 border-l-2 dark:text-zinc-600 dark:border-zinc-400/30
                      pl-3 border-zinc-300 text-zinc-400 md:text-base text-sm
                    `}
                >
                  <li>
                    <span>{`${getMonthName(experience.startTime.split('-')[1])} `}</span>
                    <span>{`${experience.startTime.split('-')[0]}`}</span>
                  </li>
                  <span>•</span>
                  <li>
                    {experience.endTime ? (
                      <>
                        <span>
                          {`${
                            // redundante
                            experience.endTime &&
                            getMonthName(experience.endTime?.split('-')[1])
                          }`}
                        </span>
                        <span>{` ${experience.endTime?.split('-')[0]}`}</span>
                      </>
                    ) : (
                      <span>Ate o momento</span>
                    )}
                  </li>
                  <span>•</span>
                  <li>
                    <span>
                      {`(${formattedDate(experience.startTime).years} ano `}
                    </span>
                    <span>e</span>
                    <span>
                      {` ${
                        formattedDate(experience.startTime, experience.endTime)
                          .months
                      } meses)`}
                    </span>
                  </li>
                </ul>
                <ul className='mt-2'>
                  {experience.responsibilities.map((respon: string) => (
                    <li key={respon} className=''>
                      {`- ${respon}`}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>
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
