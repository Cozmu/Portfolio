import { type ReactElement } from 'react';

interface Imeasures {
  measures: {
    mainW: string;
    mainH: string;
    W: string;
    H: string;
  };
}

function Loading({ measures }: Imeasures): ReactElement {
  return (
    <section
      className={`flex items-center justify-center gap-1 
        h-${measures.mainH} w-${measures.mainW}`}
    >
      <div
        className={`rounded-full bg-contrast/75 w-${measures.W} h-${measures.H}`}
        style={{ animation: 'pulse 1.5s infinite', animationDelay: '0s' }}
      />
      <div
        className={`rounded-full bg-contrast/75 w-${measures.W} h-${measures.H}`}
        style={{ animation: 'pulse 1.5s infinite', animationDelay: '0.5s' }}
      />
      <div
        className={`rounded-full bg-contrast/75 w-${measures.W} h-${measures.H}`}
        style={{ animation: 'pulse 1.5s infinite', animationDelay: '0.8s' }}
      />
    </section>
  );
}

export default Loading;
