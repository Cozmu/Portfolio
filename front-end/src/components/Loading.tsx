import { type ReactElement } from 'react';

function Loading(): ReactElement {
  return (
    <section className='flex w-full items-center justify-center gap-1 h-80'>
      <div
        className='rounded-full w-4 h-4 bg-contrast/75'
        style={{ animation: 'pulse 1.5s infinite', animationDelay: '0s' }}
      />
      <div
        className='rounded-full w-4 h-4 bg-contrast/75'
        style={{ animation: 'pulse 1.5s infinite', animationDelay: '0.5s' }}
      />
      <div
        className='rounded-full w-4 h-4 bg-contrast/75'
        style={{ animation: 'pulse 1.5s infinite', animationDelay: '0.8s' }}
      />
      {/* <p>Loading...</p> */}
    </section>
  );
}

export default Loading;
