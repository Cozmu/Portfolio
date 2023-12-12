import { type ReactElement } from 'react';

interface Imeasures {
  measures: {
    W: string;
    H: string;
  };
}

function Loading({ measures: { H, W } }: Imeasures): ReactElement {
  return (
    <>
      <div
        className={`rounded-full animate-loading bg-contrast/75 ${W} ${H}`}
        style={{ animationDelay: '0s' }}
      />
      <div
        className={`rounded-full animate-loading bg-contrast/75 ${W} ${H}`}
        style={{ animationDelay: '0.5s' }}
      />
      <div
        className={`rounded-full animate-loading bg-contrast/75 ${W} ${H}`}
        style={{ animationDelay: '0.8s' }}
      />
    </>
  );
}

export default Loading;
