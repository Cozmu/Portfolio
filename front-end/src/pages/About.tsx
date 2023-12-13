import { type ReactElement } from 'react';
import Header from '../components/Header';
import SocialMedias from '../components/SocialMedias';
import perfil from '../imgs/perfil.jpg';

function About(): ReactElement {
  return (
    <>
      <Header />
      <div className='flex p-6 mx-10 pt-40 gap-10 justify-center'>
        <section className='w-1/2'>
          <h1></h1>
          <p></p>
          <p></p>
          <p>
            issim eget maximus arcu. In in pellentesque eros. Ut dignissim metus
            in metus egestas, vitae aliquet arcu vulputate. Maecenas imperdiet
            non diam eget venenatis. Duis ultricies mollis rhoncus. Vivamus
            elementum urna dictum dignissim bibendum. Integer accumsan sem nec
            eros ornare rutrum. Maecenas eget elit est. Mauris quis augue
            imperdietque leo ut est lacinia, et bibendum orci iaculis. Nulla
            quam tellus, tristique quis scelerisque id, porttitor vitae sapien.
            Duis vitae enim arcu. Proin non auctor tellus. Proin vel aliquam
            erat, non sollicitudin metus. Integer nec risus sem. Praesent in
            eros quis metus suscipit mollis tempus nec ipsum. Aliquam erat
            volutpat. Morbi neque lorem, fringilla sit amet tincidunt vel,
            accumsan et sapien. Curabitur consectetur elit vitae leo dignissim,
            sed vestibulum neque congue.
          </p>
        </section>
        <section className='w-1/2  flex flex-col justify-between items-center'>
          <img
            src={perfil}
            alt=''
            className='rounded-md w-96 h-96 object-cover rotate-3'
          />
          <SocialMedias />
        </section>
      </div>
    </>
  );
}

export default About;
