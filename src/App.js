import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Image } from './views';

import './App.scss';

const App = () => {
  return (
    <div className='app-container'>
      <Image />
    </div>
  );
};

export default App;
