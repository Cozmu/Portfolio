import { type ReactElement } from 'react';
import Header from '../components/Header';
import SocialMedias from '../components/SocialMedias';
import SkillsCards from '../components/SkillsCards';
import ContactCard from '../components/ContactCard';
import Highlights from '../components/Highlights';
import Experiences from '../components/Experiences';

function HomePage(): ReactElement {
  return (
    <>
      <Header home={true} />
      <section className='mt-32 p-6 mx-10'>
        <div>
          <p className='text-contrast w-full text-lg'>Olá, meu nome é</p>
          <h1 className='text-7xl pb-6 dark:text-slate-50 '>
            Jorge Wellington...
          </h1>
        </div>
        <div className='w-2/3'>
          <p className='text-lg w-full'>
            Sou um
            <span className='dark:text-slate-50'>
              {' '}
              Desenvolvedor Full-Stack
            </span>
            <span> com </span>
            <span> especialidades </span>
            <span className='dark:text-slate-50'>
              JavaScript/Typescript e Node com Express
            </span>
            . Para
            <span className='dark:text-slate-50'> Front-End, </span>
            tenho conhecimentos em
            <span className='dark:text-slate-50'> React.js, Redux </span>
            <span> e </span>
            começando meus estudos em
            <span className='dark:text-slate-50'> Tailwind.</span>
            <span> Para </span>
            <span className='dark:text-slate-50'> Back-End, </span>
            domino a manipulação e coordenação de APIs e bancos de dados, tanto
            relacionais quanto não relacionais,
            <span> utilizando </span>
            <span className='dark:text-slate-50'>
              MySQL com Sequelize, MongoDB com Mongoose.
            </span>
            <span> Estou </span>
            100% disposto a iniciar minha carreira e fazer a diferença na área
            da
            <span> tecnologia. </span>
            <span className='dark:text-slate-50'>
              Prontos para trabalharmos juntos?
            </span>
          </p>
        </div>
        <SocialMedias />
      </section>
      <section>
        <SkillsCards />
      </section>
      <section>
        <nav>
          <ContactCard />
          <Highlights />
        </nav>
        <Experiences />
      </section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        sit amet urna nunc. Vestibulum elementum pharetra mauris sit amet
        lacinia. Morbi ultrices magna vitae nisi convallis interdum. Sed non
        volutpat elit. Vivamus vel ante id felis molestie feugiat id non nibh.
        Curabitur eget quam lobortis mauris lobortis vestibulum. Nam eu mi
        fermentum, viverra mi a, interdum arcu. Etiam erat urna, feugiat id
        risus ut, maximus ultricies tortor. Ut varius, nulla vitae lacinia
        aliquet, felis sapien ultricies eros, et aliquam ex enim vitae nibh.
        Mauris sit amet nisi felis. Cras eu rhoncus orci. Integer viverra id
        felis eget commodo. Maecenas quam metus, bibendum ac suscipit eget,
        congue et dui. Duis congue metus in tortor ornare euismod. Sed in
        condimentum diam. Suspendisse venenatis lacus felis, sit amet accumsan
        dui luctus pellentesque. Curabitur posuere massa quis mollis rutrum.
        Morbi et volutpat justo. Pellentesque ullamcorper laoreet lacus,
        efficitur volutpat tellus posuere sed. Aenean auctor libero non egestas
        tristique. Nunc euismod massa a accumsan convallis. Sed in convallis
        leo. Morbi vitae ipsum sollicitudin, auctor turpis sit amet, lacinia
        nisl. Morbi venenatis erat nec sagittis laoreet. Ut fringilla
        ullamcorper purus a convallis. Donec malesuada odio a nulla tristique,
        quis dictum ligula commodo. Aenean sit amet risus a lectus imperdiet
        bibendum a vitae quam. In convallis varius arcu vel ornare. Aliquam erat
        volutpat. Cras lobortis tellus eu mi pulvinar, ut tempus ligula ornare.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc
        efficitur diam ex, a fermentum arcu sollicitudin ac. Phasellus odio
        ipsum, suscipit a maximus faucibus, sodales a libero. Phasellus
        convallis, augue vel accumsan rhoncus, odio massa aliquam augue, quis
        blandit diam ipsum id turpis. Nulla consequat dui est, sed vestibulum
        nisl semper ut. Sed viverra dictum venenatis. Quisque rutrum aliquam
        cursus. Donec at lorem sit amet nisi elementum maximus at at eros.
        Praesent id suscipit risus. Phasellus justo eros, lobortis sit amet urna
        eget, placerat dapibus nulla. Fusce rhoncus ultrices erat, sed efficitur
        urna venenatis in. Proin volutpat condimentum nulla quis laoreet. Morbi
        at diam dui. Sed et nibh ut arcu dictum bibendum nec non elit. Phasellus
        tempor vel justo faucibus mollis. Suspendisse potenti. Duis a ex
        fringilla, tristique mauris et, imperdiet nisi. Fusce convallis
        ultricies eros, vel sagittis quam consequat sed. Curabitur sollicitudin
        sed diam in ultricies. Duis at mi non urna pulvinar tempus. Cras
        vestibulum magna nec mattis imperdiet. Sed sed vulputate dui. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse urna
        augue, congue eget ornare vel, volutpat a odio. Quisque porta tortor ut
        est ultricies, sed tempor sem malesuada. Suspendisse non elementum
        lacus. Nunc consequat risus at tortor pharetra, et luctus sem convallis.
        Donec sit amet magna sodales magna pharetra faucibus. In eleifend,
        tellus vitae volutpat interdum, augue sapien porta tortor, sit amet
        faucibus enim odio in nulla. Ut vel eros sollicitudin, blandit magna et,
        vestibulum mauris. Nam leo quam, semper pretium tempor sed, euismod vel
        sem. Maecenas elementum condimentum viverra. Nam euismod, leo aliquet
        sollicitudin porta, augue neque tristique mi, nec dictum nisl mi gravida
        nibh. Curabitur facilisis eros vitae velit interdum, non malesuada ipsum
        laoreet. Vivamus bibendum tellus sit amet elit scelerisque elementum.
        Duis in egestas mauris, id sagittis ante. Pellentesque scelerisque
        aliquam turpis id pellentesque. Aliquam sed tincidunt odio. Integer id
        varius tellus. Sed nibh justo, auctor et eleifend vel, tincidunt ac
        felis. Nam eget nisi ex. Sed interdum luctus bibendum. Sed mollis enim a
        diam suscipit fringilla. Ut mattis tellus justo, ac mollis nunc semper
        in. Sed augue arcu, eleifend eget nulla placerat, ultrices vehicula est.
        Cras sit amet sem et magna scelerisque viverra. Nunc id fringilla nunc,
        in egestas ante. Quisque mollis leo at tempor auctor. Integer eget enim
        id ipsum facilisis interdum. Nulla commodo felis egestas dolor
        ullamcorper venenatis. Aliquam vehicula, ante quis luctus suscipit, urna
        ex placerat ipsum, sit amet lobortis purus nulla gravida felis.
        Pellentesque lobortis metus id lectus facilisis, sit amet malesuada
        metus maximus. Nullam porttitor tristique commodo. Ut bibendum velit
        luctus sem tincidunt, cursus varius eros porta. In et tortor diam.
        Pellentesque tincidunt ante nec velit tempus, sed ullamcorper ex
        porttitor. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Donec eget tincidunt quam, sit amet
        imperdiet augue. Suspendisse potenti. Nam at dolor elementum, auctor
        nisl vel, consectetur purus. Maecenas feugiat lacus id felis varius, sed
        finibus sapien vestibulum. Sed non varius magna. Aliquam at sapien eu
        purus eleifend hendrerit ac nec ex. Donec eget sollicitudin orci. Morbi
        condimentum justo lectus, vel rutrum urna pretium vitae. Ut mattis
        semper metus, at dictum mi cursus sit amet. Donec blandit purus sapien,
        et congue tortor varius quis. Duis est tortor, sodales eleifend dapibus
        id, blandit et lectus. Donec sed volutpat quam. Vivamus gravida nunc ex,
        egestas sagittis magna porta quis. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Suspendisse urna augue, congue eget ornare
        vel, volutpat a odio. Quisque porta tortor ut est ultricies, sed tempor
        sem malesuada. Suspendisse non elementum lacus. Nunc consequat risus at
        tortor pharetra, et luctus sem convallis. Donec sit amet magna sodales
        magna pharetra faucibus. In eleifend, tellus vitae volutpat interdum,
        augue sapien porta tortor, sit amet faucibus enim odio in nulla. Ut vel
        eros sollicitudin, blandit magna et, vestibulum mauris. Nam leo quam,
        semper pretium tempor sed, euismod vel sem. Maecenas elementum
        condimentum viverra. Nam euismod, leo aliquet sollicitudin porta, augue
        neque tristique mi, nec dictum nisl mi gravida nibh. Curabitur facilisis
        eros vitae velit interdum, non malesuada ipsum laoreet. Vivamus bibendum
        tellus sit amet elit scelerisque elementum. Duis in egestas mauris, id
        sagittis ante. Pellentesque scelerisque aliquam turpis id pellentesque.
        Aliquam sed tincidunt odio. Integer id varius tellus. Sed nibh justo,
        auctor et eleifend vel, tincidunt ac felis. Nam eget nisi ex. Sed
        interdum luctus bibendum. Sed mollis enim a diam suscipit fringilla. Ut
        mattis tellus justo, ac mollis nunc semper in. Sed augue arcu, eleifend
        eget nulla placerat, ultrices vehicula est. Cras sit amet sem et magna
        scelerisque viverra. Nunc id fringilla nunc, in egestas ante. Quisque
        mollis leo at tempor auctor. Integer eget enim id ipsum facilisis
        interdum. Nulla commodo felis egestas dolor ullamcorper venenatis.
        Aliquam vehicula, ante quis luctus suscipit, urna ex placerat ipsum, sit
        amet lobortis purus nulla gravida felis. Pellentesque lobortis metus id
        lectus facilisis, sit amet malesuada metus maximus. Nullam porttitor
        tristique commodo. Ut bibendum velit luctus sem tincidunt, cursus varius
        eros porta. In et tortor diam. Pellentesque tincidunt ante nec velit
        tempus, sed ullamcorper ex porttitor. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Donec eget
        tincidunt quam, sit amet imperdiet augue. Suspendisse potenti. Nam at
        dolor elementum, auctor nisl vel, consectetur purus. Maecenas feugiat
        lacus id felis varius, sed finibus sapien vestibulum. Sed non varius
        magna. Aliquam at sapien eu purus eleifend hendrerit ac nec ex. Donec
        eget sollicitudin orci. Morbi condimentum justo lectus, vel rutrum urna
        pretium vitae. Ut mattis semper metus, at dictum mi cursus sit amet.
        Donec blandit purus sapien, et congue tortor varius quis. Duis est
        tortor, sodales eleifend dapibus id, blandit et lectus. Donec sed
        volutpat quam. Vivamus gravida nunc ex, egestas sagittis magna porta
        quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque sit amet urna nunc. Vestibulum elementum pharetra mauris
        sit amet lacinia. Morbi ultrices magna vitae nisi convallis interdum.
        Sed non volutpat elit. Vivamus vel ante id felis molestie feugiat id non
        nibh. Curabitur eget quam lobortis mauris lobortis vestibulum. Nam eu mi
        fermentum, viverra mi a, interdum arcu. Etiam erat urna, feugiat id
        risus ut, maximus ultricies tortor. Ut varius, nulla vitae lacinia
        aliquet, felis sapien ultricies eros, et aliquam ex enim vitae nibh.
        Mauris sit amet nisi felis. Cras eu rhoncus orci. Integer viverra id
        felis eget commodo. Maecenas quam metus, bibendum ac suscipit eget,
        congue et dui. Duis congue metus in tortor ornare euismod. Sed in
        condimentum diam. Suspendisse venenatis lacus felis, sit amet accumsan
        dui luctus pellentesque. Curabitur posuere massa quis mollis rutrum.
        Morbi et volutpat justo. Pellentesque ullamcorper laoreet lacus,
        efficitur volutpat tellus posuere sed. Aenean auctor libero non egestas
        tristique. Nunc euismod massa a accumsan convallis. Sed in convallis
        leo. Morbi vitae ipsum sollicitudin, auctor turpis sit amet, lacinia
        nisl. Morbi venenatis erat nec sagittis laoreet. Ut fringilla
        ullamcorper purus a convallis. Donec malesuada odio a nulla tristique,
        quis dictum ligula commodo. Aenean sit amet risus a lectus imperdiet
        bibendum a vitae quam. In convallis varius arcu vel ornare. Aliquam erat
        volutpat. Cras lobortis tellus eu mi pulvinar, ut tempus ligula ornare.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc
        efficitur diam ex, a fermentum arcu sollicitudin ac. Phasellus odio
        ipsum, suscipit a maximus faucibus, sodales a libero. Phasellus
        convallis, augue vel accumsan rhoncus, odio massa aliquam augue, quis
        blandit diam ipsum id turpis. Nulla consequat dui est, sed vestibulum
        nisl semper ut. Sed viverra dictum venenatis. Quisque rutrum aliquam
        cursus. Donec at lorem sit amet nisi elementum maximus at at eros.
        Praesent id suscipit risus. Phasellus justo eros, lobortis sit amet urna
        eget, placerat dapibus nulla. Fusce rhoncus ultrices erat, sed efficitur
        urna venenatis in. Proin volutpat condimentum nulla quis laoreet. Morbi
        at diam dui. Sed et nibh ut arcu dictum bibendum nec non elit. Phasellus
        tempor vel justo faucibus mollis. Suspendisse potenti. Duis a ex
        fringilla, tristique mauris et, imperdiet nisi. Fusce convallis
        ultricies eros, vel sagittis quam consequat sed. Curabitur sollicitudin
        sed diam in ultricies. Duis at mi non urna pulvinar tempus. Cras
        vestibulum magna nec mattis imperdiet. Sed sed vulputate dui. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse urna
        augue, congue eget ornare vel, volutpat a odio. Quisque porta tortor ut
        est ultricies, sed tempor sem malesuada. Suspendisse non elementum
        lacus. Nunc consequat risus at tortor pharetra, et luctus sem convallis.
        Donec sit amet magna sodales magna pharetra faucibus. In eleifend,
        tellus vitae volutpat interdum, augue sapien porta tortor, sit amet
        faucibus enim odio in nulla. Ut vel eros sollicitudin, blandit magna et,
        vestibulum mauris. Nam leo quam, semper pretium tempor sed, euismod vel
        sem. Maecenas elementum condimentum viverra. Nam euismod, leo aliquet
        sollicitudin porta, augue neque tristique mi, nec dictum nisl mi gravida
        nibh. Curabitur facilisis eros vitae velit interdum, non malesuada ipsum
        laoreet. Vivamus bibendum tellus sit amet elit scelerisque elementum.
        Duis in egestas mauris, id sagittis ante. Pellentesque scelerisque
        aliquam turpis id pellentesque. Aliquam sed tincidunt odio. Integer id
        varius tellus. Sed nibh justo, auctor et eleifend vel, tincidunt ac
        felis. Nam eget nisi ex. Sed interdum luctus bibendum. Sed mollis enim a
        diam suscipit fringilla. Ut mattis tellus justo, ac mollis nunc semper
        in. Sed augue arcu, eleifend eget nulla placerat, ultrices vehicula est.
        Cras sit amet sem et magna scelerisque viverra. Nunc id fringilla nunc,
        in egestas ante. Quisque mollis leo at tempor auctor. Integer eget enim
        id ipsum facilisis interdum. Nulla commodo felis egestas dolor
        ullamcorper venenatis. Aliquam vehicula, ante quis luctus suscipit, urna
        ex placerat ipsum, sit amet lobortis purus nulla gravida felis.
        Pellentesque lobortis metus id lectus facilisis, sit amet malesuada
        metus maximus. Nullam porttitor tristique commodo. Ut bibendum velit
        luctus sem tincidunt, cursus varius eros porta. In et tortor diam.
        Pellentesque tincidunt ante nec velit tempus, sed ullamcorper ex
        porttitor. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Donec eget tincidunt quam, sit amet
        imperdiet augue. Suspendisse potenti. Nam at dolor elementum, auctor
        nisl vel, consectetur purus. Maecenas feugiat lacus id felis varius, sed
        finibus sapien vestibulum. Sed non varius magna. Aliquam at sapien eu
        purus eleifend hendrerit ac nec ex. Donec eget sollicitudin orci. Morbi
        condimentum justo lectus, vel rutrum urna pretium vitae. Ut mattis
        semper metus, at dictum mi cursus sit amet. Donec blandit purus sapien,
        et congue tortor varius quis. Duis est tortor, sodales eleifend dapibus
        id, blandit et lectus. Donec sed volutpat quam. Vivamus gravida nunc ex,
        egestas sagittis magna porta quis. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Suspendisse urna augue, congue eget ornare
        vel, volutpat a odio. Quisque porta tortor ut est ultricies, sed tempor
        sem malesuada. Suspendisse non elementum lacus. Nunc consequat risus at
        tortor pharetra, et luctus sem convallis. Donec sit amet magna sodales
        magna pharetra faucibus. In eleifend, tellus vitae volutpat interdum,
        augue sapien porta tortor, sit amet faucibus enim odio in nulla. Ut vel
        eros sollicitudin, blandit magna et, vestibulum mauris. Nam leo quam,
        semper pretium tempor sed, euismod vel sem. Maecenas elementum
        condimentum viverra. Nam euismod, leo aliquet sollicitudin porta, augue
        neque tristique mi, nec dictum nisl mi gravida nibh. Curabitur facilisis
        eros vitae velit interdum, non malesuada ipsum laoreet. Vivamus bibendum
        tellus sit amet elit scelerisque elementum. Duis in egestas mauris, id
        sagittis ante. Pellentesque scelerisque aliquam turpis id pellentesque.
        Aliquam sed tincidunt odio. Integer id varius tellus. Sed nibh justo,
        auctor et eleifend vel, tincidunt ac felis. Nam eget nisi ex. Sed
        interdum luctus bibendum. Sed mollis enim a diam suscipit fringilla. Ut
        mattis tellus justo, ac mollis nunc semper in. Sed augue arcu, eleifend
        eget nulla placerat, ultrices vehicula est. Cras sit amet sem et magna
        scelerisque viverra. Nunc id fringilla nunc, in egestas ante. Quisque
        mollis leo at tempor auctor. Integer eget enim id ipsum facilisis
        interdum. Nulla commodo felis egestas dolor ullamcorper venenatis.
        Aliquam vehicula, ante quis luctus suscipit, urna ex placerat ipsum, sit
        amet lobortis purus nulla gravida felis. Pellentesque lobortis metus id
        lectus facilisis, sit amet malesuada metus maximus. Nullam porttitor
        tristique commodo. Ut bibendum velit luctus sem tincidunt, cursus varius
        eros porta. In et tortor diam. Pellentesque tincidunt ante nec velit
        tempus, sed ullamcorper ex porttitor. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Donec eget
        tincidunt quam, sit amet imperdiet augue. Suspendisse potenti. Nam at
        dolor elementum, auctor nisl vel, consectetur purus. Maecenas feugiat
        lacus id felis varius, sed finibus sapien vestibulum. Sed non varius
        magna. Aliquam at sapien eu purus eleifend hendrerit ac nec ex. Donec
        eget sollicitudin orci. Morbi condimentum justo lectus, vel rutrum urna
        pretium vitae. Ut mattis semper metus, at dictum mi cursus sit amet.
        Donec blandit purus sapien, et congue tortor varius quis. Duis est
        tortor, sodales eleifend dapibus id, blandit et lectus. Donec sed
        volutpat quam. Vivamus gravida nunc ex, egestas sagittis magna porta
        quis.
      </p>
    </>
  );
}

export default HomePage;
