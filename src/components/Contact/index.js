import Loader from 'react-loaders';
import { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const contactArray = 'Contact me'.split('');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_q53ozpp',
        'template_ybklmx8',
        form.current,
        'gEC6nRbVGpr6YKSmO'
      )
      .then(
        () => {
          alert('Message sent successfully!');
          window.location.reload(false);
        },
        (error) => {
          alert('Failed to send the message, error: ', error.text);
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={contactArray}
              index={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I am interested in both regular and contract work. If you have a
            project that you want my help with, or just want to say 'hi', let's
            get in touch!
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />{' '}
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required />
                </li>
                <li>
                  <input className="flat-button" type="submit" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
