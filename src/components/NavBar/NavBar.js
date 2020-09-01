import React from 'react';
import {
  useLocation,
  useHistory,
} from 'react-router-dom';

import './Navbar.scss';

const NavBar = () => {
  const history = useHistory();
  const location = useLocation();

  console.log(history, location);
  return (
    <ul className='navbar-container'>
      <li>Image Gallery</li>
      <li>Form Editor</li>
      <li>Table</li>
    </ul>
  );
};

export default NavBar;
