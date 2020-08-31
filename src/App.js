import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import { Image } from './views';

import './App.css';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Image} />
    </Switch>
  );
};

export default App;
