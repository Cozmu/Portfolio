import { type ReactElement } from 'react';

function Experiences(): ReactElement {
  return (
    <div
      className={`flex items-start justify-start p-3 border
       border-zinc-400/20 rounded h-full flex-col gap-2`}
    >
      <p className='text-lg text-contrast'>. . /experiências</p>
      <h3 className='text-black dark:text-white text-3xl'>
        Experiências Profissionais
      </h3>
      <p className='w-full h-full text-center'>
        Em breve
        <span className=''>.</span>
        <span className=''>.</span>
        <span className=''>.</span>
      </p>
    </div>
  );
}

export default Experiences;
