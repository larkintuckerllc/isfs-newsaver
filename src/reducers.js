import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authenticated from './ducks/authenticated';
import channel from './ducks/channel';
import connected from './ducks/connected';
import tile from './ducks/tile';
import waypoint from './ducks/waypoint';
import blocked from './ducks/blocked';

export default combineReducers({
  form: formReducer,
  authenticated,
  channel,
  connected,
  tile,
  waypoint,
  blocked,
});
