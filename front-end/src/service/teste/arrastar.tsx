import React, { type ReactElement, useEffect, useRef, useState } from 'react';

function arrastar(): ReactElement {
  const [index, setIndex] = useState<number>(2);

  const sectionsRefs = useRef<Array<HTMLElement | null>>([]);
  const mouseStartingPointRef = useRef<number | null>(null);
  const savedPositionRef = useRef<number>(0);
  const mouseUpPositionRef = useRef<number>(0);

  const onMouseDown = (event: MouseEvent): void => {
    mouseStartingPointRef.current = event.clientX;
    const slideItem = event.currentTarget as HTMLElement;
    slideItem.style.userSelect = 'none';
    slideItem.addEventListener('mousemove', onMouseMove);
  };

  const onMouseMove = (event: MouseEvent): void => {
    if (mouseStartingPointRef.current !== null) {
      const mv = event.clientX - mouseStartingPointRef.current;
      const savedPositionInPx = savedPositionRef.current * 16;

      sectionsRefs.current.forEach((section) => {
        if (section) {
          section.style.transform = `translateX(${-savedPositionInPx + mv}px)`;
        }
      });
      mouseUpPositionRef.current = mv;
    }
  };

  const onMouseUp = (event: MouseEvent): void => {
    const savedPositionInPx = savedPositionRef.current * 16;
    console.log('soltei', mouseUpPositionRef);
    if (mouseUpPositionRef.current < -150) {
      setIndex(index + 1);
    } else if (mouseUpPositionRef.current > 150) {
      setIndex(index - 1);
    } else {
      console.log('else');

      sectionsRefs.current.forEach((section) => {
        if (section) {
          section.style.transform = `translateX(${-savedPositionInPx}px)`;
        }
      });
    }

    mouseStartingPointRef.current = null;
    const slideItem = event.currentTarget as HTMLElement;
    slideItem.style.userSelect = '';
    slideItem.removeEventListener('mousemove', onMouseMove);
  };

  useEffect(() => {
    if (sectionsRefs.current.length > 0) {
      sectionsRefs.current.forEach((section) => {
        if (section) {
          section.addEventListener('dragstart', (event: MouseEvent) => {
            event.preventDefault();
          });
          section.addEventListener('mousedown', onMouseDown);
          section.addEventListener('mouseup', onMouseUp);
        }
      });

      return () => {
        sectionsRefs.current.forEach((section) => {
          if (section) {
            section.removeEventListener('mousedown', onMouseDown);
            section.removeEventListener('mouseup', onMouseUp);
          }
        });
      };
    }
  }, [index]);
  return <div>arrastar</div>;
}

export default arrastar;

const medidas = {
  movel: { img: 85, incial: 90, subtracao: 0 },
  sm: { img: 85, incial: 90, subtracao: 2.3 },
  md: { img: 60, incial: 62, subtracao: 6.4 },
  lg: { img: 60, inicial: 62.5, subtracao: 5 },
  xl: { img: 60, incial: 61.6, subtracao: 6.4 },
  '2xl': { img: 60, incial: 60.3, subtracao: 8.6 },
};

console.log(medidas);
