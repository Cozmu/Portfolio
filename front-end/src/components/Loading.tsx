import { type ReactElement } from 'react';

function Loading(): ReactElement {
  return (
    <section className='flex items-center justify-center gap-1 h-96 w-full'>
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
    </section>
  );
}

export default Loading;
