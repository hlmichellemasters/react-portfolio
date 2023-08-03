import './index.scss';
import { useState } from 'react';
import Nav from './nav';
import Hamburger from './mobile';
import { useMediaQuery } from 'react-responsive';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {isMobile && (
        <Hamburger
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
      )}
      {(!isMobile || (isMobile && isSidebarOpen)) && (
        <Nav
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          isMobile={isMobile}
        />
      )}
    </>
  );
};

export default Sidebar;
