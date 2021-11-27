import createApi from '../utils/createApi';
import { API } from '../config';

const WebServices = (options = API.SERVER.WEBSERVICES.OPTIONS) => {
  const api = createApi(options);

  const mapping = {
    login: {
      path: '/login/token',
      method: 'post',
      cache: null,
    },
    logout: {
      path: '/login/logout',
      method: 'post',
      cache: null,
    },
    getTaskPage: {
      path: '/todos',
      method: 'getAll',
      cache: null,
    },
  };
  const call = (type, params = {}, customPath = null) => {
    const { method, path, headers } = mapping[type];
    switch (method) {
      case 'update':
        return api.update(`${path}/${params.id}`, params.data);
      case 'patch':
        return api.patch(`${path}/${params.id}`, params.data);
      case 'delete':
        return api.delete(`${path}/${params}`);
      case 'get':
        return api.get(`${path}/${params}`);
      case 'getAll':
        return api.get(path);
      case 'post':
        return api.post(
          customPath === null ? path : customPath,
          params,
          headers,
        );
      case 'getSearch':
        return api.get(customPath, params, headers);
      case 'put':
        return api.put(`${path}/${params.id}`, params.data);
      default:
        break;
    }
    return false;
  };

  const setHeader = (key, value) => {
    api.setHeader(key, value);
  };

  return {
    call,
    setHeader,
  };
};

export default WebServices;
