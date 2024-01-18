import React, {
  useEffect,
  type ReactElement,
  useContext,
  useState,
  useRef,
  useLayoutEffect,
} from 'react';
import { useParams } from 'react-router-dom';
import PortfolioContext from '../context/PortfolioContext';
import unzipFile, { type IunzipFile } from '../service/ImagesAPI';
import { type Irequest } from '../service/APIgithub';
import Header from '../components/Header';
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from 'react-icons/md';

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
      const imgLength = data[0]?.img.length || 0;
      setImgLength(imgLength);
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
          const position = index * (firstTranslate ? 60 : 65);
          section.style.transform = `translateX(-${
            position - (!firstTranslate ? 10 : 0)
          }rem)`;
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
          console.log(err);
        });
    }
  }, [projects, projectName]);

  const nextSlide = (): void => {
    sectionsRefs.current.forEach((section) => {
      if (section) {
        if (savedPosition === 0) {
          section.style.transform = `translateX(-${65}rem)`;
          setSavedPosition(65);
          setIndex(index + 1);
        } else {
          if (sectionsRefs.current.length - 2 > index) {
            section.style.transform = `translateX(-${savedPosition + 65}rem)`;
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
          section.style.transform = `translateX(-${savedPosition - 65}rem)`;
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

  return (
    <div>
      <Header />
      <div className='pt-48 p-6 mx-10'>
        {data?.map(({ id, name, description, img, topics, url }) => (
          <section key={id} className='h-screen'>
            <section className='flex flex-col gap-2 '>
              <p className='text-lg dark:text-contrast text-tertiary'>
                . . /projetos
              </p>
              <h1
                className={`text-black dark:text-white 
                  text-3xl border-b pb-4 dark:border-zinc-400/20
                 border-zinc-400/40`}
              >
                {name}
              </h1>
            </section>
            <div className='relative'>
              <div className={`flex overflow-hidden py-8`}>
                {clonedGenerate(img).map(({ url, fileName }, index) => (
                  <section
                    key={index}
                    id={`${index}`}
                    ref={(el) => (sectionsRefs.current[index] = el)}
                    className='flex-shrink-0 w-[60rem] mx-10 shadow-carousel relative'
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
                ))}
              </div>
              <section
                className={`absolute left-[8.6rem] top-2/4 flex 
                justify-between w-[67.6rem]`}
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
            </div>
            <div className='flex gap-2'>
              {img.map((_e, i) => (
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
          </section>
        ))}
      </div>
    </div>
  );
}

export default ProjectDetails;
