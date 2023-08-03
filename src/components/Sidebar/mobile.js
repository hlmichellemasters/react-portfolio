import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Hamburger = ({ toggleSidebar, isSidebarOpen }) => (
  <div
    className={`hamburger-menu ${isSidebarOpen ? 'open' : ''}`}
    onClick={toggleSidebar}
  >
    <FontAwesomeIcon icon={faBars} />
  </div>
);

export default Hamburger;
