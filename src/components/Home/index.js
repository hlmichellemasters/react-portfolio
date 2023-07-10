import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LogoM from '../../assets/images/michelle-M.png';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss';
import Loader from 'react-loaders';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const firstNameArray = ['i', 'c', 'h', 'e', 'l', 'l', 'e'];
  const lastNameArray = ['a', 's', 't', 'e', 'r', 's'];
  const jobArray = [
    's',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoM} alt="M" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={firstNameArray}
              index={15}
            />
            <img src={LogoM} alt="M" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={lastNameArray}
              index={25}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              index={35}
            />
          </h1>
          <h2>
            Frontend Developer / Python Developer / Machine-Learning Engineer /
            Biologist
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
