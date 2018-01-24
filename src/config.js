export const ACTION_PREFIX = 'app/';
const BASE = `${window.location.protocol}//${window.location.hostname}`;
export const BASE_URL_APP = `${BASE}:${window.location.port}${window.location.pathname}`;
export const BASE_URL_HTTP = `${BASE}:3000`;
export const BASE_URL_SOCKET = `${BASE}:3001`;
export const MODE_BY_ID = {
  fullNoMenu: {
    menu: false,
    marquee: true,
    blockingWidth: 80,
    masterChannel: 6,
    channels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    matrix: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8, 9],
    ],
    zoomMin: 5,
    dimensions: [{
      width: 1920,
      height: 1080,
      scale: 0.84,
      padding: 0,
      spacing: 28,
      margin: 20,
    }, {
      width: 1920,
      height: 1080,
      scale: 0.84,
      padding: 0,
      spacing: 28,
      margin: 60,
    }, {
      width: 1080,
      height: 1920,
      scale: 1,
      padding: 111,
      spacing: 112,
      margin: 0,
    }],
    leftBottom: 111,
    rightBottom: 118,
  },
};
export const TILES = {
  byId: {
    satellite: {
      id: 'satellite',
      url: 'http://192.168.1.2:8080/satellite/{z}/{y}/{x}',
      // url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
      bg: 'rgb(0,0,0)',
    },
    lights: {
      id: 'lights',
      url: 'http://192.168.1.2:8083/lights/{z}/{y}/{x}.jpeg',
      bg: 'rgb(0,0,0)',
    },
  },
  ids: [
    'satellite',
    'lights',
  ],
};
export const SAVER_WAYPOINTS = [{
  lat: 36,
  lng: -114,
}, {
  lat: 40,
  lng: -6,
}, {
  lat: 24,
  lng: 88,
}, {
  lat: 6,
  lng: 0,
}, {
  lat: -12,
  lng: -60,
}];
export const SAVER_DURATION = 240;
export const SAVER_DELAY = 300;
export const SAVER_CHECK = 60;
export const SAVER_START = 8;
export const SAVER_END = 17;
export const SAVER_ZOOM = 7;
export const SAVER_TIMEOUT = 60 * 60;
