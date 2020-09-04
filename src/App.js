import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { NavBar } from './components';
import { Image, InfiniteGallery } from './views';

import './App.scss';

const App = () => {
  return (
    <div className='app-container'>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Image} />
        <Route path='/infinite-gallery' component={InfiniteGallery} />
      </Switch>
    </div>
  );
};

export default App;
