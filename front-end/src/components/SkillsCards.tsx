import { type ReactElement } from 'react';
import skills from '../service/Skills';

function SkillsCards(): ReactElement {
  return (
    <div className='flex'>
      {skills.map(({ id, name, time }) => {
        const today = new Date();
        const date = new Date(time);
        const difference = today.getTime() - date.getTime();
        const monthus = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
        return (
          <section key={id}>
            <p>{name}</p>
            <p>{monthus}</p>
            <i
              className={`devicon-${name.toLowerCase()}-${
                name === 'Express' ? 'original' : 'plain'
              }`}
            />
          </section>
        );
      })}
    </div>
  );
}

export default SkillsCards;
