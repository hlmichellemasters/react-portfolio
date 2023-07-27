import { useState, useEffect } from 'react';
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
const aboutMeArray = 'About me'.split('');

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutMeArray}
              index={15}
            />
          </h1>
          <p>
            I am a full-stack software developer with a passion for learning and
            quality code. I thrive in fast-paced environments and enjoy working
            with a team to solve problems and create solutions. I am always
            looking for new opportunities to grow and expand my skillset, and am
            currently seeking a full-time position.
          </p>

          <p>
            I have a Bachelors of Science in Computer Science from Western
            Governors University. I was most recently a remote, full-stack
            associate software developer for a small consulting company based
            outside of Austin, TX. While there I managed my time between up to 3
            different clients and also furthered my education in
            machine-learning and data science.
          </p>
          <p>
            I also have a Bachelors of Science in Biology from the University of
            Oregon. Previous work experiences and continued passions also
            include molecular biology, microbiology, and healthcare. I am
            excited to further bring my creativity and problem-solving skills to
            the world of web and application development!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
