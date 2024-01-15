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
  const [currentSession, setCurrentSession] = useState<HTMLElement>();

  const { projectName } = useParams();
  const { projects } = useContext(PortfolioContext);

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
            : 'rgb(248 250 252)';
        }
      });

      sectionsRefs.current.forEach((section) => {
        if (section) {
          const position = index * (firstTranslate ? 60 : 65);

          section.style.transform = `translateX(-${
            position - (!firstTranslate ? 10 : 0)
          }rem)`;
          section.style.transition = 'transform .5s';
          setSavedPosition(position);

          if (index === Number(section.id)) {
            // capturado fora do loop
            setCurrentSession(section);
          }

          // section.addEventListener('transitionend', () => {
          //   if (sectionsRefs.current.length - 2 === Number(section.id)) {
          //     section.style.transition = 'none';
          //     setIndex(2);
          //   }
          // });
        }
      });
      if (firstTranslate) {
        setFirstTranslate(!firstTranslate);
      }
    }
  }, [index, imgLength]);

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
        // section.addEventListener('transitionend', () => {
        //   if (sectionsRefs.current.length - 3 === index) {
        //     section.style.transition = 'none';
        //     setIndex(2);
        //   }
        // });
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
          } else {
            console.log(section.id);
          }
          // console.log(
          //   sectionsRefs.current.length - 2,
          //   index,
          //   sectionsRefs.current.length - 2 > index,
          // );
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
      <div className='pt-48'>
        {data?.map(({ id, name, description, img, topics, url }) => (
          <section key={id} className='h-screen'>
            <h1 className='p-6 mx-10'>{name}</h1>
            <div className='relative'>
              <div className={`flex overflow-hidden`}>
                {clonedGenerate(img).map(({ url, fileName }, index) => (
                  <section
                    key={index}
                    id={`${index}`}
                    ref={(el) => (sectionsRefs.current[index] = el)}
                    className='flex-shrink-0 w-[60rem] mx-10'
                  >
                    <img className='w-full' src={url} alt={fileName} />
                  </section>
                ))}
              </div>
              <section
                className={`absolute left-[8.6rem] top-2/4 flex 
                justify-between w-[67.6rem]`}
              >
                <button
                  onClick={previousSlide}
                  className='w-10 h-10 text-slate-50'
                >
                  <MdOutlineArrowBackIosNew className='w-full h-full' />
                </button>
                <button
                  onClick={nextSlide}
                  className='w-10 h-10 z-50 text-slate-50'
                >
                  <MdOutlineArrowForwardIos className='w-full h-full' />
                </button>
              </section>
            </div>
            <div className='flex gap-2 mx-10 pt-5'>
              {clonedGenerate(img).map((_e, i) => (
                <nav key={i}>
                  <button
                    ref={(el) => (buttonsRefs.current[i] = el)}
                    id={`${i}`}
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
