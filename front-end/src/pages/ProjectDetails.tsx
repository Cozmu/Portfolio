import React, {
  useEffect,
  type ReactElement,
  useContext,
  useState,
  useRef,
  useLayoutEffect,
} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import PortfolioContext from '../context/PortfolioContext';
import unzipFile, { type IunzipFile } from '../service/ImagesAPI';
import { type Irequest } from '../service/APIgithub';
import Header from '../components/Header';
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from 'react-icons/md';
import Loading from '../components/Loading';
import { TbBrandGithub } from 'react-icons/tb';
import { PiArrowCircleRightFill, PiArrowCircleLeftFill } from 'react-icons/pi';

interface IprojectDetails extends Irequest {
  img: [
    {
      url: string;
      fileName: string;
    },
  ];
}

interface IparamsImg {
  url: string;
  fileName: string;
}

function ProjectDetails(): ReactElement {
  const [data, setData] = useState<IprojectDetails[]>();
  const [savedPosition, setSavedPosition] = useState<number>(0);
  const [index, setIndex] = useState<number>(2);
  const [imgLength, setImgLength] = useState<number>(0);
  const [firstTranslate, setFirstTranslate] = useState(true);
  const [endTranslate, setEndTranslate] = useState(false);
  const [currentSession, setCurrentSession] = useState<HTMLElement>();
  const [screenWidth, setScreenWidth] = useState<number>(0);

  const { projectName } = useParams();
  const { projects, toggleBaseColors } = useContext(PortfolioContext);

  const sectionsRefs = useRef<Array<HTMLElement | null>>([]);
  const buttonsRefs = useRef<Array<HTMLElement | null>>([]);

  const getProjectDetails = async (): Promise<IunzipFile[]> => {
    const projectsIMG = await unzipFile(projectName, 'project-details');
    return projectsIMG;
  };

  const handleResize = (): void => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    if (data) {
      handleResize();
      const verify = data[0]?.img.length || 0;
      setTimeout(() => {
        setImgLength(verify);
      }, 600);

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [data]);

  const getStartingPosition = (): number => {
    if (screenWidth >= 1536) {
      return 60.3;
    }
    if (screenWidth >= 1280) {
      return 61.6;
    }
    if (screenWidth >= 1024) {
      return 62.5;
    }
    if (screenWidth >= 768) {
      return 62;
    }
    return 90;
  };

  const getTranslateMeasure = (): number => {
    if (screenWidth < 768) {
      return 90;
    }
    return 65;
  };

  const getReadjustedMeasure = (): number => {
    if (screenWidth >= 1536) {
      return 8.6;
    }
    if (screenWidth >= 1280) {
      return 6.4;
    }
    if (screenWidth >= 1024) {
      return 5;
    }
    if (screenWidth >= 768) {
      return 6.4;
    }
    if (screenWidth >= 640) {
      return 2.3;
    }
    return 0;
  };

  useLayoutEffect(() => {
    if (buttonsRefs.current.length > 0 && sectionsRefs.current.length > 0) {
      buttonsRefs.current.forEach((button) => {
        if (button) {
          const isMatchingIndex = Number(button.id) === index;
          button.style.backgroundColor = isMatchingIndex
            ? '#4b54ff'
            : toggleBaseColors === 'dark'
              ? 'rgb(248 250 252)'
              : 'rgba(82, 82, 91, 0.3)';
        }
      });

      const firstMeasure = getStartingPosition();
      const measure = getTranslateMeasure();
      const subtraction = getReadjustedMeasure();

      sectionsRefs.current.forEach((section) => {
        if (section) {
          const position = index * (firstTranslate ? firstMeasure : measure);

          section.style.transform = `translateX(-${
            position - (!firstTranslate ? subtraction : 0)
          }vw)`;

          section.style.transition =
            firstTranslate || endTranslate ? 'none' : 'transform .5s';
          setSavedPosition(position);

          if (index === Number(section.id)) {
            setCurrentSession(section);
          }
        }
      });

      if (endTranslate) {
        setEndTranslate(!endTranslate);
      }
      if (firstTranslate) {
        setFirstTranslate(!firstTranslate);
      }
    }
  }, [index, imgLength, toggleBaseColors, screenWidth]);

  useEffect(() => {
    if (currentSession) {
      const handleTransitionEnd = (): void => {
        if (sectionsRefs.current.length - 2 === Number(currentSession?.id)) {
          setEndTranslate(true);
          setIndex(2);
        }
        if (Number(currentSession.id) === 1) {
          setEndTranslate(true);
          setIndex(sectionsRefs.current.length - 3);
        }
      };

      currentSession.addEventListener('transitionend', handleTransitionEnd);

      return () => {
        currentSession.removeEventListener(
          'transitionend',
          handleTransitionEnd,
        );
      };
    }
  }, [currentSession]);

  useEffect(() => {
    if (projects) {
      getProjectDetails()
        .then((result) => {
          const filterProject = projects
            .map((project) => {
              if (project.name === projectName) {
                return { ...project, img: result };
              }
              return 'project';
            })
            .filter(
              (project) => typeof project !== 'string',
            ) as IprojectDetails[];

          setData(filterProject);
        })
        .catch((err) => {
          return err;
        });
    }
  }, [projects, projectName]);

  const nextSlide = (): void => {
    const measure = getTranslateMeasure();
    sectionsRefs.current.forEach((section) => {
      if (section) {
        if (savedPosition === 0) {
          section.style.transform = `translateX(-${measure}vw)`;
          setSavedPosition(measure);
          setIndex(index + 1);
        } else {
          if (sectionsRefs.current.length - 2 > index) {
            section.style.transform = `translateX(-${
              savedPosition + measure
            }vw)`;
            section.style.transition = 'transform .5s';
            setSavedPosition(savedPosition + measure);
            setIndex(index + 1);
          }
        }
      }
    });
  };

  const previousSlide = (): void => {
    const measure = getTranslateMeasure();
    sectionsRefs.current.forEach((section) => {
      if (section) {
        if (index > 1) {
          section.style.transform = `translateX(-${savedPosition - measure}vw)`;
          section.style.transition = 'transform .5s';
          setSavedPosition(savedPosition - measure);
          setIndex(index - 1);
        }
      }
    });
  };

  const onControlButtonClick = ({
    target,
  }: React.MouseEvent<HTMLButtonElement>): void => {
    if (target instanceof HTMLButtonElement) {
      setIndex(Number(target.id));
    }
  };

  const clonedGenerate = (img: IparamsImg[]): IparamsImg[] => {
    return [...img.slice(-2), ...img, ...img.slice(0, 2)];
  };

  if (imgLength < 1) {
    return (
      <div>
        <Header />
        <section
          className={`flex h-screen mr-5
              items-center justify-center gap-1
              `}
        >
          <Loading measures={{ W: 'md:w-5 w-3', H: 'md:h-5 h-3' }} />
        </section>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div
        className={`
          pt-64 
          lg:px-6 md:px-3 2xl:pb-16 pb-20
          lg:mx-10 mx-5
        `}
      >
        {data?.map(({ id, name, description, img, topics, html_url: url }) => (
          <section key={id}>
            <section className='flex flex-col gap-2'>
              <p className='text-lg dark:text-contrast text-tertiary'>
                . . /projetos
              </p>
              <h1
                className={`text-black dark:text-white 
                  lg:text-3xl text-2xl border-b pb-4 
                dark:border-zinc-400/20 border-zinc-400/40
                `}
              >
                {name}
              </h1>
            </section>
            <div className='relative'>
              <div
                className={`${img.length > 1 && 'flex overflow-hidden'} py-8 pb-2`}
              >
                {img.length > 1 ? (
                  clonedGenerate(img).map(({ url, fileName }, index) => (
                    <section
                      key={index}
                      id={`${index}`}
                      ref={(el) => (sectionsRefs.current[index] = el)}
                      className={`
                        flex-shrink-0 shadow-carousel relative
                        md:w-[60vw] w-[85vw]
                        mx-[2.5vw]
                      `}
                    >
                      <img
                        className='w-full rounded-sm'
                        src={url}
                        alt={fileName}
                      />
                      {toggleBaseColors === 'dark' && (
                        <div
                          className={`absolute inset-0 bg-black 
                        rounded-sm opacity-5`}
                        />
                      )}
                    </section>
                  ))
                ) : (
                  <section
                    className={`
                      relative w-full md:h-[30rem] h-[20rem] shadow-carousel
                    `}
                  >
                    <img
                      className='w-full h-full rounded-sm object-cover'
                      src={img[0].url}
                      alt={img[0].fileName}
                    />
                    <div
                      className={`
                        absolute top-[30%] text-slate-50 flex flex-col items-center
                        mx-auto w-full
                      `}
                    >
                      <span className='text-zinc-200 md:text-8xl text-6xl'>
                        APENAS
                      </span>
                      <span className='text-zinc-200 md:text-8xl text-6xl'>
                        BACK-END
                      </span>
                    </div>
                  </section>
                )}
              </div>
              {img.length > 1 && (
                <section // kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
                  className={` 
                    w-[96vw] max-[345px]:w-[95vw] min-[450px]:w-[95.5vw] 
                    min-[535px]:w-[91.5vw] sm:w-[91vw] min-[690px]:w-[90.5vw]
                    left-[-3vw] min-[535px]:left-[-1vw] sm:left-2.5 min-[690px]:left-3.5
                    
                    md:w-[70.5vw] min-[820px]:w-[70.2vw] min-[970px]:w-[69.5vw]
                    min-[1200px]:w-[68.5vw] min-[1500px]:w-[67vw] 2xl:w-[68vw]
                    min-[1750px]:w-[67.5vw] min-[2240px]:w-[66.5vw]
                    min-[1910px]:w-[67vw] min-[1440px]:w-[66.6vw] min-[2560px]:w-[67vw]
                    md:left-7 min-[820px]:left-8 min-[970px]:left-10 lg:left-7
                    min-[1200px]:left-10 xl:left-14 min-[1500px]:left-20
                    2xl:left-28 min-[1750px]:left-32 min-[2240px]:left-44
                    min-[1910px]:left-36 min-[1440px]:left-20 min-[2560px]:left-48

                    md:top-[50%] top-[45%] 
                    flex justify-between absolute
                  `}
                >
                  <button
                    onClick={previousSlide}
                    className={`${screenWidth < 768 && 'botao'} rounded-full
                      w-10 h-10 max-[345px]:w-9 
                      dark:text-slate-50 shadow-carousel md:shadow-none
                      md:text-main-dark text-slate-50
                    `}
                  >
                    {screenWidth >= 768 ? (
                      <MdOutlineArrowBackIosNew className='w-full h-full' />
                    ) : (
                      <PiArrowCircleLeftFill className='w-full h-full' />
                    )}
                  </button>
                  <button
                    onClick={nextSlide}
                    className={`${screenWidth < 768 && 'botao'} rounded-full
                      w-10 h-10 max-[345px]:w-9
                      dark:text-slate-50 shadow-carousel md:shadow-none
                      md:text-main-dark text-slate-50
                    `}
                  >
                    {screenWidth >= 768 ? (
                      <MdOutlineArrowForwardIos className='w-full h-full' />
                    ) : (
                      <PiArrowCircleRightFill className='w-full h-full' />
                    )}
                  </button>
                </section>
              )}
            </div>
            <div className='flex gap-2 mb-8 justify-center'>
              {img.length > 1 &&
                img.map((_e, i) => (
                  <nav key={i}>
                    <button
                      ref={(el) => (buttonsRefs.current[i] = el)}
                      id={`${i + 2}`}
                      className={`w-9 max-[345px]:w-[2rem] h-1`}
                      onClick={(e) => {
                        onControlButtonClick(e);
                      }}
                    />
                  </nav>
                ))}
            </div>
            <div className='flex flex-col lg:gap-3 gap-4'>
              <p className='text-lg w-full dark:text-zinc-300 text-black xl:w-2/3'>
                {description}
              </p>
              <ul className='flex lg:gap-3 gap-2 flex-wrap lg:text-sm text-xs'>
                {topics.map((topic, index) => (
                  <li
                    className={`py-[5px] px-1 rounded-sm text-center uppercase
                  dark:text-contrast dark:bg-contrast/40 bg-tertiary/40 text-contrast`}
                    key={index}
                  >
                    {topic}
                  </li>
                ))}
              </ul>
              <NavLink
                className={`p-2 w-32 text-center rounded-sm mt-6
                  text-lg dark:text-slate-50 text-black 
                  dark:bg-contrast bg-tertiary
                  hover:dark:bg-tertiary hover:bg-contrast                  
                  flex items-center gap-1 justify-center`}
                target='_black'
                to={url}
              >
                <TbBrandGithub />
                Repositório
              </NavLink>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ProjectDetails;
