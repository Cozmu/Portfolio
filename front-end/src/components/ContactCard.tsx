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
  const [formValid, setFormValid] = useState<string>('');
  const { setContactCard } = useContext(PortfolioContext);
  const reference = useRef(null);
  const [form, setForm] = useState<Iform>({
    name: '',
    email: '',
    message: '',
  });

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
          },
          (err) => {
            console.log('ERRO', err);
          },
        );
    }
  };

  useEffect(() => {
    const el = reference.current;
    setContactCard(el);
  }, []);

  return (
    <form
      className={`flex flex-col p-3 border gap-3 items-center 
      h-3/4 border-zinc-400/20 rounded mt-10`}
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
            outline-none p-1 h-full resize-none`}
          onChange={(event) => {
            handleChange(event);
          }}
          maxLength={4000}
          name='message'
          value={form.message}
        />
      </label>
      {formValid?.length > 1 && (
        <span className={`text-red-600 w-full flex items-center gap-1`}>
          <IoAlertCircleOutline />
          {formValid}
        </span>
      )}
      <input
        className={`bg-tertiary dark:bg-contrast cursor-pointer dark:text-white 
        text-black hover:dark:bg-tertiary hover:bg-contrast p-3 rounded w-2/4 my-7`}
        type='submit'
        value='Enviar'
      />
    </form>
  );
}

export default ContactCard;
