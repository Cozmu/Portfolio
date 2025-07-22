import { type ReactElement } from 'react';
import skills from '../service/date';
import formattedDate from '../service/formattedDate';

function SkillsCards(): ReactElement {
  return (
    <div
      className={`
        grid lg:grid-cols-4 min-[810px]:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5
      `}
    >
      {skills.map(({ id, name, time }) => {
        const date = formattedDate(time);

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
            <p className='col-span-2'>
              {`${date.years === 0 ? date.months : date.years} ${
                date.years > 0 ? 'anos' : date.months === 1 ? 'mês' : 'meses'
              } de experiência`}
            </p>
          </section>
        );
      })}
    </div>
  );
}

export default SkillsCards;
