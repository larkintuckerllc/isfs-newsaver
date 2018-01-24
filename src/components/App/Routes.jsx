import React, { PropTypes } from 'react';
import { hashHistory, IndexRoute, Route, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Frame from './Frame';
import Saver from '../Saver';

const Routes = (props, { store }) => (
  <Router history={syncHistoryWithStore(hashHistory, store)}>
    <Route path="/" component={Frame}>
      <IndexRoute component={Saver} />
    </Route>
  </Router>
);
Routes.contextTypes = {
  store: PropTypes.object.isRequired,
};
export default Routes;
