import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import './Navbar.scss';

const NavBar = () => {
  const history = useHistory();
  const location = useLocation();

  console.log(history, location);
  const changeRoute = (route) => {
    history.push(route);
  };
  return (
    <ul className='navbar-container'>
      <li onClick={() => changeRoute('/')}>Image Gallery</li>
      <li onClick={() => changeRoute('/infinite-gallery')}>Infinite Gallery</li>
      <li>Table</li>
    </ul>
  );
};

export default NavBar;
