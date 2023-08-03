import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import mmLogo from '../../assets/images/mm-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import OutsideClickHandler from '../utilities/OutsideClickHandler';

const Nav = ({ isMobile, isSidebarOpen, setIsSidebarOpen }) => {
  const handleOutsideClick = () => {
    setIsSidebarOpen(false);
  };

  const closeNavBar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {
        <OutsideClickHandler onOutsideClick={handleOutsideClick}>
          <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <div
              className={`nav-bar sidebar ${
                isMobile ? 'mobile-nav' : 'desktop-nav'
              }`}
            >
              <Link className="logo" to="/">
                <img src={mmLogo} alt="mastersLogo" />
              </Link>
              <nav>
                <NavLink
                  exact="true"
                  to="/"
                  activeClassName="active"
                  onClick={closeNavBar}
                >
                  <FontAwesomeIcon icon={faHome} color="#f0e394" />
                </NavLink>
                <NavLink
                  exact="true"
                  to="/about"
                  activeClassName="active"
                  className="about-link"
                  onClick={closeNavBar}
                >
                  <FontAwesomeIcon icon={faUser} color="#f0e394" />
                </NavLink>
                <NavLink
                  exact="true"
                  to="/contact"
                  activeClassName="active"
                  className="contact-link"
                  onClick={closeNavBar}
                >
                  <FontAwesomeIcon icon={faEnvelope} color="#f0e394" />
                </NavLink>
              </nav>
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/hlmichellemasters/"
                    onClick={closeNavBar}
                  >
                    <FontAwesomeIcon icon={faLinkedin} color="#f0e394" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/hlmichellemasters"
                    onClick={closeNavBar}
                  >
                    <FontAwesomeIcon icon={faGithub} color="#f0e394" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </OutsideClickHandler>
      }
    </>
  );
};

export default Nav;
