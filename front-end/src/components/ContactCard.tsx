import { useState, type ReactElement, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';

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

  const emailSubmite = (e: FormEvent): void => {
    e.preventDefault();

    const templateParams = {
      from_name: form.name,
      message: form.message,
      email: form.email,
    };
    console.log(import.meta.env.VITE_SERVICE_ID);

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
          value={form.name}
        />
      </label>
      <label htmlFor=''>
        <input
          type='email'
          onChange={(event) => {
            handleChange(event);
          }}
          name='email'
          value={form.email}
        />
      </label>
      <label htmlFor=''>
        <textarea
          onChange={(event) => {
            handleChange(event);
          }}
          name='message'
          value={form.message}
        />
      </label>
      <input type='submit' value='Enviar' />
    </form>
  );
}

export default ContactCard;
