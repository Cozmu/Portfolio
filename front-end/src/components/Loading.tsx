import { type ReactElement } from 'react';

function Loading(): ReactElement {
  return (
    <div className='flex w-full items-center justify-center gap-1 h-80 loading-animation'>
      <div className='rounded-full w-4 h-4 bg-contrast/75'></div>
      <div className='rounded-full w-4 h-4 bg-contrast/75'></div>
      <div className='rounded-full w-4 h-4 bg-contrast/75'></div>
      {/* <p>Loading...</p> */}
    </div>
  );
}

export default Loading;
