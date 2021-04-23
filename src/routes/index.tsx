import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SingIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SingIn} />
    <Route path="/signup" exact component={SignUp} />
  </Switch>
);

export default Routes;
