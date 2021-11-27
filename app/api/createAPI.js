import config from 'config';
// import getAuthToken from 'utils/getAuthToken';

import WebServices from './WebServices';

export default function* createAPI() {
  const api = WebServices(config.API.SERVER.WEBSERVICES.OPTIONS);
  // const token = yield getAuthToken();
  // api.setHeader('Authorization', `Bearer ${token}`);
  return api;
}
