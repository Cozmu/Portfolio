import { useState, type ReactElement, type FormEvent } from 'react';
import emailjs from '@emailjs/browser'; // utilizar

interface Iform {
  name: string;
  email: string;
  message: string;
}

interface IhandleChageParameters {
  target: {
    name: string;
    value: string;
  };
}

function ContactCard(): ReactElement {
  const [form, setForm] = useState<Iform>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = ({
    target: { name, value },
  }: IhandleChageParameters): void => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const emailSubmite = (e: FormEvent): void => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form onSubmit={emailSubmite}>
      <label htmlFor=''>
        <input
          type='text'
          onChange={(event) => {
            handleChange(event);
          }}
          name='name'
        />
      </label>
      <label htmlFor=''>
        <input
          type='email'
          onChange={(event) => {
            handleChange(event);
          }}
          name='email'
        />
      </label>
      <label htmlFor=''>
        <textarea
          onChange={(event) => {
            handleChange(event);
          }}
          name='message'
        />
      </label>
      <input type='submit' value='Enviar' />
    </form>
  );
}

export default ContactCard;
