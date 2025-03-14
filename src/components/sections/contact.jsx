import RevealOnScroll from '../reveal-on-scroll';
import emailjs from 'emailjs-com';
import { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_PUBLIC_KEY);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(() => {
        alert('Message Sent!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => alert('Oops! Something went wrong. Please try again.'));
  };

  return (
    <section
      id='contact'
      className='min-h-screen flex items-center justify-center py-20'
    >
      <RevealOnScroll>
        <div className='px-4 w-150'>
          <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
            Contact me
          </h2>
          <form className='space-y-6' onSubmit={handleSubmit}>
            <div className='relative'>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500
                focus:bg-blue-500/5
                '
                placeholder='Name'
              />
            </div>
            <div className='relative'>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500
                focus:bg-blue-500/5
                '
                placeholder='example@email.com'
              />
            </div>
            <div className='relative'>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={5}
                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500
                focus:bg-blue-500/5
                '
                placeholder='Your message here'
              />
            </div>
            <button
              type='submit'
              className='w-full bg-blue-500 text-white px-6 py-3 rounded-md font-medium transition hover:bg-blue-600'
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
