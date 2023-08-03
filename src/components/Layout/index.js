import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
  const [loaderComplete, setLoaderComplete] = useState(false);
  const location = useLocation();

  const timeOut = () =>
    setTimeout(() => {
      setLoaderComplete(true);
    }, 1500);

  useEffect(() => {
    setLoaderComplete(false);
    timeOut();
  }, [location]);

  useEffect(() => {
    timeOut();
  }, []);

  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        {loaderComplete && <span className="tags top-tags">&lt;body&gt;</span>}

        <Outlet />
        {loaderComplete && (
          <span className="tags bottom-tags">
            &lt;/body&gt;
            <br />
            <span className="bottom-tag-html">&lt;/html&gt;</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default Layout;
