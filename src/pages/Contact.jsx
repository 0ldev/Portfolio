import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="p-6 centered">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">Contato</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 bg-white dark:bg-darkSecondary border-b-2 border-gray-300 focus:border-accent outline-none transition-colors duration-300"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 bg-white dark:bg-darkSecondary border-b-2 border-gray-300 focus:border-accent outline-none transition-colors duration-300"
          />
          <textarea
            placeholder="Mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 bg-white dark:bg-darkSecondary border-b-2 border-gray-300 focus:border-accent outline-none transition-colors duration-300"
          ></textarea>
          <button type="submit" className="btn w-full">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
