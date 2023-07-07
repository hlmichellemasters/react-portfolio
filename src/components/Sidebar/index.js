import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import mmLogo from '../../assets/images/mm-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={mmLogo} alt="mastersLogo" />
    </Link>
    <nav>
      <NavLink exact="true" to="/" activeClassName="active">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        to="/about"
        activeClassName="active"
        className="about-link"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        to="/contact"
        activeClassName="active"
        className="contact-link"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/hlmichellemasters/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/hlmichellemasters"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
);

export default Sidebar;
