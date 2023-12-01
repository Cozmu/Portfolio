import { type ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineWhatsapp } from 'react-icons/md';

function SocialMedias(): ReactElement {
  return (
    <section className='flex my-4 w-3/5 gap-4'>
      <div>
        <NavLink
          to='https://www.linkedin.com/in/jorge-reis-dev/'
          target='_black'
        >
          <FaLinkedin className='w-6 h-6' />
        </NavLink>
      </div>
      <div>
        <NavLink to='https://github.com/Cozmu' target='_black'>
          <FaGithub className='w-6 h-6' />
        </NavLink>
      </div>
      <div>
        <NavLink to='https://wa.me/5593988078317' target='_black'>
          <MdOutlineWhatsapp className='w-6 h-6' />
        </NavLink>
      </div>
    </section>
  );
}

export default SocialMedias;
