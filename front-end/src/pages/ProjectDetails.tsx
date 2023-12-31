import {
  useEffect,
  type ReactElement,
  useContext,
  useState,
  useRef,
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

function ProjectDetails(): ReactElement {
  const [data, setData] = useState<IprojectDetails[]>();
  const [savedPosition, setSavedPosition] = useState<number>(0);
  const [index, setIndex] = useState<number>(0);
  const { projectName } = useParams();
  const { projects } = useContext(PortfolioContext);
  const sectionsRefs = useRef<Array<HTMLElement | null>>([]);
  const buttonsRefs = useRef<Array<HTMLElement | null>>([]);
  // const buttonsRefs = document.getElementsByName('buttonsSlide');

  const getProjectDetails = async (): Promise<IunzipFile[]> => {
    const projectsIMG = await unzipFile(projectName, 'project-details');
    return projectsIMG;
  };

  // useEffect(() => {
  //   if (buttonsRefs) {
  //     console.log(buttonsRefs);
  //   }
  // }, [index]);

  useEffect(() => {
    if (buttonsRefs.current.length > 0 && sectionsRefs.current.length > 0) {
      buttonsRefs.current.forEach((button) => {
        console.log(buttonsRefs.current);
        if (button) {
          const isMatchingIndex = Number(button.id) === index;
          button.style.backgroundColor = isMatchingIndex
            ? '#4b54ff'
            : 'rgb(248 250 252)';
        }
      });
      sectionsRefs.current.forEach((section) => {
        if (section) {
          const position = index * 65;
          section.style.transform = `translateX(-${position}rem)`;
          setSavedPosition(position);
        }
      });
    }
  }, [index]);

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
          if (sectionsRefs.current.length - 1 > index) {
            section.style.transform = `translateX(-${savedPosition + 65}rem)`;
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
        if (savedPosition > 0) {
          section.style.transform = `translateX(-${savedPosition - 65}rem)`;
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

  return (
    <div>
      <Header />
      <div className='pt-48'>
        {data?.map(({ id, name, description, img, topics, url }) => (
          <section key={id} className='h-screen'>
            <h1 className='p-6 mx-10'>{name}</h1>
            <div className='relative'>
              <div className={`flex overflow-hidden`}>
                {img.map(({ url, fileName }, index) => (
                  <div key={index}>
                    <section
                      ref={(el) => (sectionsRefs.current[index] = el)}
                      className='flex-shrink-0 w-[60rem] mx-10'
                    >
                      <img className='w-full' src={url} alt={fileName} />
                    </section>
                  </div>
                ))}
              </div>
              <section className='absolute top-2/4 flex justify-between w-[66.3rem]'>
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
              {img.map((_e, i) => (
                <nav key={i}>
                  <button
                    ref={(el) => (buttonsRefs.current[i] = el)}
                    // name='buttonsSlide'
                    id={`${i}`}
                    className={`w-9 bg-slate-50 h-1`}
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
