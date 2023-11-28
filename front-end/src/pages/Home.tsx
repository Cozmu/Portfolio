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
      <section className=' mt-32 p-6 mx-10'>
        <div>
          <p className='text-contrast w-full text-lg'>Olá, meu nome é</p>
          <h1 className='text-7xl pb-6 dark:text-slate-50 text-black'>
            Jorge Wellington...
          </h1>
        </div>
        <div className='w-2/3'>
          <p className='text-lg w-full'>
            Sou um
            <span className='dark:text-slate-50 text-black'>
              {' '}
              Desenvolvedor Full-Stack
            </span>
            <span> com </span>
            <span> especialidades </span>
            <span className='dark:text-slate-50 text-black'>
              JavaScript/Typescript e Node com Express
            </span>
            . Para
            <span className='dark:text-slate-50 text-black'> Front-End, </span>
            tenho conhecimentos em
            <span className='dark:text-slate-50 text-black'>
              {' '}
              React.js, Redux
            </span>
            <span> e </span>
            começando meus estudos em
            <span className='dark:text-slate-50 text-black'> Tailwind.</span>
            <span> Para </span>
            <span className='dark:text-slate-50 text-black'> Back-End, </span>
            domino a manipulação e coordenação de APIs e bancos de dados, tanto
            relacionais quanto não relacionais,
            <span> utilizando </span>
            <span className='dark:text-slate-50 text-black'>
              MySQL com Sequelize, MongoDB com Mongoose.
            </span>
            <span> Estou </span>
            100% disposto a iniciar minha carreira e fazer a diferença na área
            da
            <span> tecnologia. </span>
            <span className='dark:text-slate-50 text-black'>
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac aliquam
        nisi. Suspendisse in blandit justo. Donec vitae risus nulla. Donec id
        nulla ex. Mauris sollicitudin ligula sed massa dapibus, a porttitor sem
        porttitor. Donec a vulputate ex. Aliquam eu tincidunt orci. Morbi
        scelerisque purus eget odio gravida eleifend. Ut pretium elit non metus
        sodales, at vulputate turpis auctor. Nulla id leo eget augue porttitor
        tincidunt. Nullam a scelerisque magna. Cras egestas accumsan cursus.
        Quisque sit amet urna dolor. Proin leo mauris, tincidunt nec sagittis
        non, tempus vitae arcu. Proin vitae pulvinar massa. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Suspendisse eget tristique augue,
        nec aliquam nisi. Etiam et felis ut dui iaculis venenatis. Ut ultricies
        condimentum mauris non mattis. Suspendisse porttitor ultrices mauris,
        vel consequat lectus lobortis sed. Duis eu tortor rutrum, auctor tortor
        eu, egestas libero. Curabitur posuere diam quam, gravida rutrum est
        sollicitudin nec. Nunc eu tellus efficitur, molestie nunc id, vehicula
        leo. Sed placerat purus id lorem cursus, dapibus elementum mauris
        interdum. Etiam rhoncus nec ipsum non accumsan. Ut eu sodales turpis.
        Phasellus eget nisi vel metus vulputate venenatis. Vivamus dui metus,
        aliquet sit amet consectetur aliquet, dapibus at leo. Suspendisse
        aliquam nibh metus, nec malesuada odio eleifend eget. Vestibulum iaculis
        tellus velit, nec euismod nisi commodo in. Morbi venenatis aliquam ex.
        Mauris viverra sed lectus pharetra faucibus. Sed imperdiet neque a
        pharetra feugiat. Proin eget vestibulum quam. Cras ex erat, hendrerit in
        euismod at, blandit in augue. Phasellus ac vulputate enim. Phasellus
        tincidunt felis nec lacinia tincidunt. Sed est tortor, euismod ac mi eu,
        facilisis cursus neque. Cras eu sollicitudin eros, et lacinia sem. Nunc
        odio mi, pellentesque ac interdum sed, commodo eu sem. Donec in
        efficitur lorem. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Nunc blandit in dui non feugiat. Donec
        felis nunc, pretium vitae porta at, elementum a neque. Etiam dictum enim
        in diam eleifend faucibus. Integer ullamcorper iaculis orci, vel
        ullamcorper mi semper vitae. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Ut gravida pulvinar elit.
        Sed sodales vestibulum tristique. Duis tempor nulla in nisi tristique
        luctus. Donec scelerisque massa sed enim commodo luctus. Suspendisse
        elementum a lacus nec suscipit. Nunc vel dignissim enim, in suscipit
        nisi. Fusce et cursus mi. Sed eget placerat odio, vel pulvinar sem.
        Nulla id lectus bibendum, mollis urna sit amet, tincidunt augue. Aliquam
        fermentum ipsum odio, sed efficitur eros tempus in. Suspendisse sed
        euismod tortor. Duis faucibus pulvinar lectus. Mauris eleifend erat
        vitae mattis sollicitudin. Sed ullamcorper mattis porta. Etiam fermentum
        nulla ante, vel mattis urna pellentesque eget. Integer lacinia
        consectetur leo, quis mollis felis vulputate nec. Vestibulum ligula
        elit, pulvinar euismod iaculis at, aliquet dictum diam. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Quisque pharetra
        libero diam. Nunc eu semper ipsum, eget blandit nisl. Vivamus convallis
        nec diam ut ultricies. Suspendisse in feugiat mauris, sagittis pulvinar
        metus. Aliquam volutpat augue vel maximus vestibulum. Nullam at massa
        massa. Aenean at pulvinar erat, eget scelerisque tortor. Maecenas vel
        diam eget velit rhoncus blandit vitae non ligula. Praesent sodales nisi
        quis massa faucibus, hendrerit tempus orci aliquam. Duis id ullamcorper
        ipsum. Donec sagittis metus eget viverra commodo. Phasellus rutrum
        libero a nulla consequat interdum. Ut accumsan eget velit a maximus.
        Mauris fringilla, nibh nec egestas ornare, eros risus lacinia lacus,
        consectetur gravida ante risus vitae sapien. Nunc faucibus neque a
        tellus efficitur, et mollis sem dictum. Vivamus malesuada est eget dui
        varius lobortis. In vulputate velit turpis, a ultricies ligula volutpat
        eleifend. Sed vitae aliquam sem, sit amet posuere lectus. Praesent ac
        ultricies neque, eu interdum magna. Vestibulum eget ex vulputate lorem
        gravida euismod in vel justo. Proin ut aliquam eros, id malesuada magna.
        Nunc id massa rutrum, interdum odio at, maximus lectus. Curabitur
        finibus ultricies nunc, id ultrices tellus. Vestibulum facilisis, mauris
        quis egestas lobortis, massa ante interdum elit, ac suscipit neque lacus
        sit amet ipsum. Quisque tempor luctus ante nec ultricies. Nullam mollis
        felis sed diam pharetra, pellentesque congue diam rutrum. Cras ac justo
        in lorem tincidunt mattis in sit amet sem. Duis eget orci orci.
        Vestibulum non erat rhoncus, efficitur massa quis, euismod erat.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus
        vel nisi sit amet felis semper dictum ac vel lacus. Vestibulum iaculis
        diam eget scelerisque dapibus. Pellentesque ultricies tristique ipsum,
        sed elementum diam aliquam vel. Mauris luctus mattis nisl, a vestibulum
        mauris mollis non. In fermentum enim interdum, dapibus sem nec,
        scelerisque enim. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Etiam vulputate eu eros vel ultricies. Mauris elementum, dolor
        vitae gravida dignissim, sem massa lobortis metus, ac viverra urna metus
        vitae nisi. Cras aliquam lorem vel elit rutrum, at lacinia tortor
        euismod. Fusce eu sem semper, ultrices justo ut, tristique risus. Nunc
        id tellus sit amet felis consequat dignissim sit amet eu est. Mauris
        euismod ex et nibh malesuada luctus. Proin pulvinar, lectus quis
        vestibulum facilisis, mauris ligula accumsan urna, non dictum neque
        lorem ut neque. Aenean eget hendrerit erat. Vestibulum ante ipsum primis
        in faucibus orci luctus et ultrices posuere cubilia curae; Nulla dapibus
        sem massa, sit amet pretium sapien iaculis eu. Vivamus ipsum tellus,
        congue non vulputate vel, eleifend non nisi. Mauris tempor leo quis
        eleifend blandit. Sed non consequat diam. Pellentesque turpis nisl,
        faucibus in aliquam id, consequat pretium elit. Fusce bibendum, augue id
        egestas tincidunt, nunc libero lacinia nisi, a bibendum nunc felis at
        dolor. Donec laoreet nec sapien et porta. Proin tincidunt hendrerit nisl
        a dapibus. Curabitur vulputate enim a dui feugiat, sed sodales magna
        luctus. Quisque nulla enim, porta sit amet purus vitae, placerat
        vestibulum dolor. Sed tristique justo sit amet orci luctus consectetur.
        Morbi blandit bibendum justo, vitae venenatis arcu. Fusce sodales
        ultrices augue fermentum iaculis. Aenean sollicitudin congue nulla, at
        dapibus nunc interdum id. Integer tempor purus in purus dignissim
        dictum. Duis nec tortor magna. Sed vel tempor mauris, sit amet finibus
        augue. Aenean non elit eget tortor auctor ultrices in non ex. Nam
        pulvinar tincidunt libero, et venenatis risus aliquet sit amet. Donec ut
        venenatis metus. Vestibulum sagittis mattis faucibus. Curabitur
        sollicitudin vulputate orci, at semper sapien sodales tempor. Aenean
        feugiat dolor eget arcu tempus consequat. Curabitur tincidunt, purus
        pharetra mattis sagittis, ex nisl volutpat lorem, quis luctus nisl est a
        nisi. Sed ac sapien et quam egestas varius et eget velit. Aliquam
        congue, metus sit amet ultricies maximus, mi lorem pulvinar arcu, at
        fermentum ante justo eu lectus. Curabitur eu turpis eu ex fringilla
        cursus. Suspendisse at nulla libero. Nulla tempor felis nisi, vitae
        dapibus libero blandit ut. Fusce euismod vel nisl non sollicitudin.
        Etiam eget arcu rhoncus, maximus mauris eget, iaculis mauris. Curabitur
        cursus posuere rutrum. Morbi eu mi quis ipsum sollicitudin blandit. Sed
        auctor lorem sed risus facilisis, ac egestas nunc venenatis. Integer in
        vestibulum nulla, facilisis ultrices orci. Orci varius natoque penatibus
        et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque eu
        pretium sapien, id cursus elit. Pellentesque metus lectus, mattis
        scelerisque tincidunt in, dignissim convallis nisi. Curabitur maximus
        malesuada nibh ac auctor. Nam dapibus pharetra sem, at dictum dui
        facilisis quis. Cras vel massa luctus, fringilla tellus nec, euismod
        justo. Mauris vel laoreet ex. Vivamus condimentum dapibus cursus. Donec
        porta odio a fringilla porta. Aliquam ac molestie enim, eget sagittis
        erat. Vestibulum mollis pharetra eleifend. Fusce in posuere massa. Donec
        rhoncus aliquam nisl ornare blandit. Nulla quis magna vel felis luctus
        venenatis. Integer dictum lacus et nisi euismod sagittis. Etiam maximus
        lorem vitae erat consequat varius. Maecenas tortor tellus, sollicitudin
        quis pulvinar vitae, semper id lacus. Aliquam in leo sit amet sem semper
        ullamcorper. Nunc pulvinar at libero in commodo. Etiam lobortis dolor
        non consequat elementum. Sed vitae consectetur purus, quis mattis dolor.
        In accumsan euismod viverra. Nullam hendrerit auctor arcu, a luctus quam
        convallis id. Fusce tempor eleifend commodo. Cras sit amet turpis ex.
        Pellentesque laoreet cursus eros, quis imperdiet purus varius eu.
        Vivamus maximus risus nibh, ut mattis urna commodo non. Integer id
        fringilla sapien. Sed maximus neque sit amet feugiat volutpat. Ut sed
        luctus nulla. Curabitur nec felis velit. Phasellus elementum nunc quis
        tincidunt sagittis. In quam leo, malesuada eu est ac, gravida
        ullamcorper enim. Quisque fringilla vulputate fermentum. Mauris nec
        lacus mollis, vehicula turpis sed, suscipit quam. Sed ut vulputate
        dolor, quis cursus tortor. Nulla a pulvinar justo, blandit faucibus
        neque. Proin sed leo ante. Proin vehicula augue vitae faucibus
        efficitur. Maecenas lobortis diam mi, ut aliquam neque luctus et. Aenean
        sem nibh, elementum nec arcu vitae, ornare egestas tortor. Donec nec
        risus eget lacus venenatis vestibulum nec id nisl. Fusce nec purus
        neque. Maecenas bibendum faucibus eros. Donec nec congue felis. Vivamus
        aliquet mattis dolor, id volutpat arcu consectetur ac. Donec commodo
        fermentum vulputate. Ut maximus sodales nisl, eget hendrerit metus
        vehicula et. Fusce placerat dolor in arcu ultricies, ut posuere leo
        imperdiet. Sed id arcu dui. Donec tempus neque eget metus iaculis
        tincidunt. Vivamus lobortis dolor ut dictum condimentum. Aenean velit
        sem, dignissim sit amet orci ac, sollicitudin bibendum ante. Cras tempus
        felis arcu, placerat consectetur leo condimentum pulvinar. Cras ante
        risus, egestas in urna elementum, tincidunt volutpat felis. Aliquam
        luctus orci sit amet quam faucibus ullamcorper. Aliquam eu justo et
        tellus sodales dapibus. Pellentesque eleifend pulvinar libero, et luctus
        diam blandit non. Quisque aliquet purus quis aliquet lobortis. Nam
        placerat fermentum est eu finibus. Etiam accumsan fringilla tortor at
        tempus. Sed risus arcu, eleifend molestie lorem vel, ultrices sagittis
        dolor. Maecenas tempus iaculis urna, sed imperdiet odio lobortis eu.
        Suspendisse potenti. Proin diam ante, ornare eu arcu ut, luctus
        ultricies purus. Aliquam eu malesuada quam, et tristique risus. Vivamus
        tempor leo eget ultrices malesuada. Vestibulum vehicula, urna tincidunt
        posuere volutpat, dolor mi scelerisque magna, sed rutrum lacus eros at
        ipsum. Quisque vel lectus vestibulum, lacinia nisl fermentum,
        consectetur orci. Quisque facilisis, augue nec consequat sagittis, risus
        purus sagittis nisi, et pulvinar neque leo aliquet nibh. Vestibulum in
        mollis urna. Suspendisse potenti. Quisque ullamcorper sollicitudin
        lacus, id maximus risus ullamcorper eu. Donec aliquet nisl id leo
        euismod vehicula. Suspendisse potenti. Curabitur at nulla nulla. Donec
        fringilla consequat lectus, id bibendum mauris facilisis ac. Morbi
        tristique porta ex, eu aliquet nulla finibus eu. Nunc fermentum porta
        metus. Donec convallis velit sed risus varius rutrum. Donec eleifend
        faucibus leo, non luctus mauris. Etiam sit amet sem eu mi suscipit
        aliquam. Nulla eget accumsan magna, nec sollicitudin tortor. Donec
        fermentum ante et massa suscipit tincidunt. Quisque quis sem non nibh
        tincidunt pharetra. In gravida sem nisl, ut sagittis libero ornare
        vitae. Praesent ut pellentesque lectus. Vivamus eget quam eget quam
        convallis elementum. Duis congue urna mi, vitae placerat erat vestibulum
        quis. In hac habitasse platea dictumst. Sed lacus turpis, fermentum sed
        mollis ac, sagittis ac nunc. Proin sed consectetur sem. Nullam lacinia
        iaculis sapien in luctus. Nam non felis in turpis aliquet finibus.
        Integer ut arcu vitae tellus gravida viverra sed vel ipsum. Duis dictum
        viverra nisi, vel viverra quam ornare at. Maecenas eget sagittis lectus.
        Pellentesque sit amet cursus justo, laoreet eleifend quam. Pellentesque
        quis venenatis ante. Vivamus at felis nec purus elementum venenatis ac
        vel lacus. Sed ac nunc ullamcorper, semper sem sed, mollis ligula.
        Quisque rhoncus est quis lorem consectetur tempus. Fusce sit amet nibh a
        augue sollicitudin mattis. Suspendisse dapibus consectetur risus, quis
        aliquet mauris ultrices nec. Nulla dignissim, libero eu bibendum
        tincidunt, leo nunc dictum odio, sed scelerisque nunc mi vitae nibh.
        Mauris eget mauris malesuada risus aliquet varius. Nunc aliquet accumsan
        ligula quis accumsan. Aenean venenatis ex at eros porta condimentum.
        Aenean posuere metus id turpis eleifend, sit amet viverra purus mattis.
        Donec id ornare augue. Sed vitae posuere mi. Curabitur at ipsum ut massa
        tristique tristique ut vitae nisl. Nam eros purus, malesuada et
        facilisis vel, varius quis leo. Nunc consectetur aliquet nulla. Nam
        luctus laoreet leo, ut dignissim lectus euismod ac. Etiam enim urna,
        tincidunt sit amet velit vitae, interdum faucibus ligula. Nullam sed
        nibh nec enim pulvinar cursus sit amet sit amet lacus. Curabitur commodo
        diam vitae nunc dignissim pulvinar. Morbi sed dignissim orci, ac cursus
        lectus. Quisque tristique vel massa in posuere. Quisque tincidunt mi at
        maximus placerat. Praesent interdum, eros id sollicitudin lacinia, urna
        erat iaculis est, sed molestie ex dui eu nisl. Cras nisi massa,
        imperdiet nec luctus sed, vulputate nec nisl. Vestibulum id mauris enim.
        Cras sed magna nisi. Donec ornare cursus nulla, sed bibendum tortor
        lacinia id. Donec convallis sapien tellus, porta cursus libero dignissim
        at. Aenean varius sed erat eu rutrum. Nunc in commodo mi. Vivamus
        elementum, ipsum a ornare porttitor, turpis dui porta ligula, a
        efficitur orci odio aliquam ligula. Etiam dignissim felis eu ligula
        tempor commodo. Maecenas consectetur erat quis porta egestas. Donec at
        sodales risus, in lobortis dui. Nulla quis metus posuere, mollis nibh
        commodo, varius neque. Pellentesque arcu turpis, bibendum ac euismod ut,
        vulputate sed velit. Praesent blandit in tellus tincidunt mollis.
        Integer tortor libero, aliquet lobortis ultricies nec, malesuada id
        nisl. Sed rutrum justo ac felis porta consectetur. Ut orci metus,
        facilisis non metus vitae, venenatis ultricies eros. Sed commodo aliquet
        purus vitae consequat. Nullam accumsan orci quis sem commodo lobortis.
        Morbi mattis odio vitae aliquet luctus. Curabitur nisl nisl, maximus nec
        laoreet ullamcorper, cursus a augue. Maecenas rhoncus, nibh ullamcorper
        laoreet ultrices, libero tortor tincidunt eros, a tincidunt enim metus
        et nunc. Aliquam a tincidunt justo. Vestibulum tempor ut sem eget
        elementum. Suspendisse accumsan nulla id erat molestie, vitae convallis
        orci pellentesque. Aliquam tempor est in sagittis vestibulum. Donec
        tincidunt nisi sit amet leo bibendum, nec hendrerit sapien pretium.
        Curabitur libero ex, eleifend ac ante sit amet, ullamcorper consectetur
        arcu. Ut luctus ipsum sit amet commodo elementum. Ut vitae odio in lacus
        viverra hendrerit et vitae velit. In malesuada euismod ligula non
        feugiat. Nam ultrices nec velit sit amet viverra. Phasellus elementum
        dolor nec est hendrerit, nec euismod turpis volutpat. Pellentesque urna
        lacus, volutpat vitae mollis vel, laoreet ac dolor. Nullam volutpat
        augue at neque placerat pulvinar. Nullam viverra et tortor quis
        imperdiet. Ut id ligula dictum, lobortis enim nec, faucibus risus. In
        nec bibendum ligula. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Mauris nec lorem ac nibh pharetra varius nec vel orci. Etiam
        varius tellus massa. Nulla ut volutpat urna. Praesent ac accumsan massa.
        Etiam in leo facilisis augue bibendum porttitor. Quisque eu lacinia mi.
        Donec pellentesque ipsum sed risus congue, et vestibulum erat suscipit.
        Sed nisl mauris, pulvinar id ultrices eget, porttitor sed eros. Cras ac
        purus nec arcu feugiat fringilla. Nulla quis quam rhoncus, tincidunt
        velit semper, lobortis nunc. Ut laoreet consequat tellus, pulvinar
        malesuada risus interdum eget. In eleifend turpis quis tortor bibendum,
        sollicitudin fringilla dui facilisis. Proin aliquet libero euismod elit
        dapibus malesuada. Sed augue tellus, posuere eu lectus non, pretium
        efficitur felis. Donec ligula enim, volutpat sit amet ante sed, dictum
        facilisis ex. Duis tempor eros nec odio iaculis, nec tincidunt tellus
        tincidunt. Aenean feugiat diam sit amet velit ornare, at congue ligula
        rhoncus. Aliquam tincidunt mollis suscipit. Nunc eleifend eros nec
        feugiat fringilla. Etiam commodo commodo consectetur. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Nullam nec dapibus diam. Fusce dapibus
        convallis vehicula. Mauris in lobortis libero. Curabitur ornare, tellus
        non pulvinar tristique, arcu risus ullamcorper nunc, et vestibulum erat
        ante eu elit. Duis commodo non dui ac ornare. Ut at egestas nunc. Nam in
        quam nec dui egestas blandit. Orci varius natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Ut orci justo, pretium
        vitae quam vel, ullamcorper condimentum velit.
      </p>
    </>
  );
}

export default HomePage;
