import { type ReactElement } from 'react';
import Header from '../components/Header';
import { certificates } from '../service/date';

function Certificates(): ReactElement {
  return (
    <div className=''>
      <Header />
      <ul className='p-6 mx-10 pt-56'>
        {certificates.map(
          ({ id, title, issuingOrganization, emission, description }) => (
            <li className={``} key={id}>
              <p>{title}</p>
              <p>{issuingOrganization}</p>
              <p>{emission}</p>
              <p className='w-2/4'>{description}</p>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}

export default Certificates;
