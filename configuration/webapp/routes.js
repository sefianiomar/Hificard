/* @flow weak */

import React from 'react';
import { createRoutes, IndexRoute, Route } from 'react-router';
import Relay from 'react-relay';

import Chrome from '../../webapp/components/Chrome';
import signin from '../../units/signin/webapp/components/signin';
import signup from '../../units/signup/webapp/components/signup';
import home from '../../units/home/webapp/components/home';

export const queries = {
  Viewer: () => Relay.QL`query { Viewer }`,
};

export default createRoutes(
  <Route path="/" component={Chrome} queries={queries}>
    <IndexRoute component={home} queries={queries} />
    <Route path="signin">
      <IndexRoute component={signin} queries={queries} />
    </Route>
     <Route path="signup">
      <IndexRoute component={signup} queries={queries} />
    </Route>
  </Route>
);
