import {
  useState,
  type ReactElement,
  type FormEvent,
  useRef,
  useEffect,
  useContext,
} from 'react';
import emailjs from '@emailjs/browser';
import PortfolioContext from '../context/PortfolioContext';
import { IoAlertCircleOutline } from 'react-icons/io5';
import { MdCheckCircleOutline } from 'react-icons/md';
import Loading from './Loading';

interface Iform {
  name: string;
  email: string;
  message: string;
}

interface Itarget {
  target: {
    name: string;
    value: string;
  };
}

function ContactCard(): ReactElement {
  const [isSend, setIsSend] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [formValid, setFormValid] = useState<string>('');
  const [form, setForm] = useState<Iform>({
    name: '',
    email: '',
    message: '',
  });
  const { setContactCard, toggleBaseColors } = useContext(PortfolioContext);
  const reference = useRef(null);
  const isDark =
    toggleBaseColors === 'dark'
      ? 'scrollbar-track-zinc-900'
      : 'scrollbar-track-gray-300';

  const handleChange = ({ target: { name, value } }: Itarget): void => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validadeForm = ({
    email,
    message,
    name,
  }: Iform): boolean | undefined => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailIsValide = regexEmail.test(email);
    if (!email || !message || !name) {
      setFormValid('Preencha todos os campos');
    } else if (!emailIsValide) {
      setFormValid('Email invalido');
    } else {
      setFormValid('');
      return true;
    }
  };

  const emailSubmite = (e: FormEvent): void => {
    e.preventDefault();
    const templateParams = {
      name: form.name,
      message: form.message,
      email: form.email,
    };
    const isValid = validadeForm(templateParams);

    if (isValid) {
      setIsLoading(true);
      emailjs
        .send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          templateParams,
          'E4aXm28kBpk_o-4yG',
        )
        .then(
          (response) => {
            // fazer esquema para ficar um loading enquanto envia
            console.log('STATUS', response.status);
            setForm({ name: '', email: '', message: '' });
            setIsLoading(false);
            setIsSend(true);
          },
          (err) => {
            console.log('ERRO', err);
          },
        );
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsSend(false);
    }, 2000);
  }, [isSend]);

  useEffect(() => {
    const el = reference.current;
    setContactCard(el);
  }, []);

  if (isLoading) {
    return (
      <section
        className={`flex flex-col p-3 border gap-3 items-center 
          border-zinc-400/20 rounded h-full w-full`}
      >
        <div className='w-full flex flex-col gap-2 mb-11'>
          <p className='text-lg text-contrast'>. . /contato</p>
          <h3 className='text-black dark:text-white text-3xl'>
            Vamos trabalhar juntos? Entre em contato
          </h3>
        </div>
        <section
          className={`flex items-center justify-center gap-1 
          h-96 w-full`}
        >
          <Loading measures={{ W: 'w-4', H: 'h-4' }} />
        </section>
      </section>
    );
  }

  return (
    <form
      className={`flex flex-col p-3 border gap-3 items-center
      border-zinc-400/20 rounded relative h-full`}
      onSubmit={emailSubmite}
      ref={reference}
    >
      <div className='w-full flex flex-col gap-2 mb-11'>
        <p className='text-lg text-contrast'>. . /contato</p>
        <h3 className='text-black dark:text-white text-3xl'>
          Vamos trabalhar juntos? Entre em contato
        </h3>
      </div>
      <label className='w-full flex flex-col gap-1' htmlFor=''>
        <span>Nome:</span>
        <input
          className='bg-black/0 border-b border-zinc-400/20 outline-none p-1'
          type='text'
          onChange={(event) => {
            handleChange(event);
          }}
          name='name'
          value={form.name}
        />
      </label>
      <label className='w-full flex flex-col gap-1' htmlFor=''>
        <span>E-mail:</span>
        <input
          className='bg-black/0 border-b border-zinc-400/20 outline-none p-1'
          type='email'
          onChange={(event) => {
            handleChange(event);
          }}
          name='email'
          value={form.email}
        />
      </label>
      <label className={`w-full h-40 flex flex-col gap-1`} htmlFor=''>
        <span>Menssagem:</span>
        <textarea
          className={`bg-black/0 border-b border-zinc-400/20 
            scrollbar-thin ${isDark} scrollbar-thumb-contrast
            outline-none p-1 h-full resize-none `}
          onChange={(event) => {
            handleChange(event);
          }}
          maxLength={4000}
          name='message'
          value={form.message}
        />
      </label>
      {formValid?.length > 1 && (
        <span
          className={`text-red-600 absolute w-full 
            left-3 top-[28.5rem] flex items-center gap-1`}
        >
          <IoAlertCircleOutline />
          {formValid}
        </span>
      )}
      {isSend && (
        <span
          className={`text-green-600 absolute w-full 
            left-3 top-[28.5rem] flex items-center gap-1`}
        >
          <MdCheckCircleOutline />
          Mensagem enviada
        </span>
      )}
      <input
        className={`bg-tertiary dark:bg-contrast cursor-pointer dark:text-white 
        text-black hover:dark:bg-tertiary hover:bg-contrast p-3 rounded w-2/4 my-4 mt-8`}
        type='submit'
        value='Enviar'
      />
    </form>
  );
}

export default ContactCard;
