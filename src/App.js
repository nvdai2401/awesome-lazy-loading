import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import { NavBar } from './components';
import { Image } from './views';

import './App.scss';

const App = () => {
  return (
    <div className='app-container'>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path='/' component={Image} />
      </Switch>
    </div>
  );
};

export default App;
