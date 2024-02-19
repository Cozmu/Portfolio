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

  const { projectName } = useParams();
  const { projects, toggleBaseColors } = useContext(PortfolioContext);

  const sectionsRefs = useRef<Array<HTMLElement | null>>([]);
  const buttonsRefs = useRef<Array<HTMLElement | null>>([]);

  const getProjectDetails = async (): Promise<IunzipFile[]> => {
    const projectsIMG = await unzipFile(projectName, 'project-details');
    return projectsIMG;
  };

  useEffect(() => {
    if (data) {
      const verify = data[0]?.img.length || 0;
      setTimeout(() => {
        setImgLength(verify);
      }, 600);
    }
  }, [data]);

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

      sectionsRefs.current.forEach((section) => {
        if (section) {
          const position = index * (firstTranslate ? 60.8 : 65);

          section.style.transform = `translateX(-${
            position - (!firstTranslate ? 8.6 : 0)
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
  }, [index, imgLength, toggleBaseColors]);

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
    sectionsRefs.current.forEach((section) => {
      if (section) {
        if (savedPosition === 0) {
          section.style.transform = `translateX(-${65}vw)`;
          setSavedPosition(65);
          setIndex(index + 1);
        } else {
          if (sectionsRefs.current.length - 2 > index) {
            section.style.transform = `translateX(-${savedPosition + 65}vw)`;
            section.style.transition = 'transform .5s';
            setSavedPosition(savedPosition + 65);
            setIndex(index + 1);
          }
        }
      }
    });
  };

  const previousSlide = (): void => {
    sectionsRefs.current.forEach((section) => {
      if (section) {
        if (index > 1) {
          section.style.transform = `translateX(-${savedPosition - 65}vw)`;
          section.style.transition = 'transform .5s';
          setSavedPosition(savedPosition - 65);
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
          lg:px-6 md:px-3 2xl:pb-32 pb-20
          lg:mx-10 mx-5
        `}
      >
        {data?.map(({ id, name, description, img, topics, html_url: url }) => (
          <section key={id} className='h-screen'>
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
                className={`${img.length > 1 && 'flex overflow-hidden'} py-8`}
              >
                {img.length > 1 ? (
                  clonedGenerate(img).map(({ url, fileName }, index) => (
                    <section
                      key={index}
                      id={`${index}`}
                      ref={(el) => (sectionsRefs.current[index] = el)}
                      className={`
                        flex-shrink-0 w-[60vw] mx-[2.5vw] shadow-carousel relative
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
                  <section className='relative w-full h-[30rem] shadow-carousel'>
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
                      <span className='text-zinc-200 text-8xl'>APENAS</span>
                      <span className='text-zinc-200 text-8xl'>BACK-END</span>
                    </div>
                  </section>
                )}
              </div>
              {img.length > 1 && (
                <section
                  className={` 
                    w-[68.6vw] left-[6.6vw] top-2/4
                    flex justify-between absolute
                  `}
                >
                  <button
                    onClick={previousSlide}
                    className='w-10 h-10 dark:text-slate-50 text-black'
                  >
                    <MdOutlineArrowBackIosNew className='w-full h-full' />
                  </button>
                  <button
                    onClick={nextSlide}
                    className='w-10 h-10 z-50 dark:text-slate-50 text-black'
                  >
                    <MdOutlineArrowForwardIos className='w-full h-full' />
                  </button>
                </section>
              )}
            </div>
            <div className='flex gap-2 mb-5'>
              {img.length > 1 &&
                img.map((_e, i) => (
                  <nav key={i}>
                    <button
                      ref={(el) => (buttonsRefs.current[i] = el)}
                      id={`${i + 2}`}
                      className={`w-9 h-1`}
                      onClick={(e) => {
                        onControlButtonClick(e);
                      }}
                    />
                  </nav>
                ))}
            </div>
            <div className='flex flex-col gap-3'>
              <p className='text-lg dark:text-zinc-300 text-black w-2/3'>
                {description}
              </p>
              <ul className='flex gap-3 flex-wrap'>
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
