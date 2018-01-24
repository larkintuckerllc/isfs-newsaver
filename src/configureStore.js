import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { hashHistory } from 'react-router';
import thr0wMiddleware from './util/thr0wMiddleware';
import reducers from './reducers';
import { SET_TILE } from './ducks/tile';
import { SET_WAYPOINT } from './ducks/waypoint';
import { getChannels } from './util/parameters';

export default () => {
  const middlewares = [
    thunk,
    thr0wMiddleware(['@@router/LOCATION_CHANGE', SET_TILE, SET_WAYPOINT], getChannels()),
    routerMiddleware(hashHistory),
  ];
  return createStore(
    reducers,
    compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension ?
        window.devToolsExtension() : f => f
    )
  );
};
