import { ACTION_PREFIX } from '../config';

// API
// REDUCER MOUNT POINT
const reducerMountPoint = 'blocked';
// ACTIONS
export const SET_BLOCKED = `${ACTION_PREFIX}SET_BLOCKED`;
// ACTION CREATOR VALIDATORS
export default (state = true, action) => {
  switch (action.type) {
    case SET_BLOCKED:
      return action.value;
    default:
      return state;
  }
};
// ACCESSORS
export const getBlocked = (state) => state[reducerMountPoint];
// ACTION CREATORS
export const setBlocked = (value) => ({
  type: SET_BLOCKED,
  value,
});
