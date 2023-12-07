import { type ReactElement } from 'react';
import skills from '../service/Skills';

function SkillsCards(): ReactElement {
  return (
    <div className='grid grid-cols-4 gap-5'>
      {skills.map(({ id, name, time }) => {
        const today = new Date();
        const date = new Date(time);
        const difference = today.getTime() - date.getTime();
        const monthus = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
        return (
          <section
            className={`grid grid-rows-2 grid-cols-2 dark:bg-zinc-900
            hover:dark:text-tertiary hover:dark:bg-zinc-800/60 hover:duration-300
            h-24 rounded p-4 gap-1 shadow-box-shadow bg-gray-200/80 text-black
            hover:text-contrast dark:text-zinc-400`}
            key={id}
          >
            <p className=''>{name}</p>
            <i
              className={`devicon-${name.toLowerCase()}-${
                name === 'Express' ? 'original' : 'plain'
              } text-end`}
            />
            <p className='col-span-2'>{`${monthus} meses de experiência`}</p>
          </section>
        );
      })}
    </div>
  );
}

export default SkillsCards;
