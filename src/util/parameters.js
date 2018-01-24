import { MODE_BY_ID, SAVER_END, SAVER_START } from '../config';

const hour = (new Date()).getHours();
const newTileId = hour >= SAVER_START && hour <= SAVER_END ?
  'satellite' : 'lights';
const modeId = 'fullNoMenu';
const mode = MODE_BY_ID[modeId];
export const getChannels = () => (mode.channels);
export const getMasterChannel = () => (1);
export const getMatrix = () => (mode.matrix);
export const getDimensions = () => mode.dimensions;
export const getTile = () => (newTileId);
