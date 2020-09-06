import React from 'react';

import { Switch, Route } from 'react-router-dom';

import SignUp from '../pages/SignUp';
import Signin from '../pages/Signin';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Signin} />
    <Route path="/signup" component={SignUp} />
  </Switch>
);

export default Routes;
