import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import thr0wMiddleware from './util/thr0wMiddleware';
import reducers from './reducers';
import { SET_TILE } from './ducks/tile';
import { SET_WAYPOINT } from './ducks/waypoint';
import { getChannels } from './util/parameters';

export default () => {
  const middlewares = [
    thunk,
    thr0wMiddleware([SET_TILE, SET_WAYPOINT], getChannels()),
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
