import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_DATABASE_URL || 'http://bindapi.test';

const ApiClient = () => {
  const defaultOptions = {
    baseURL,
  };
  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use(async (request) => {
      request.headers.Authorization = `Bearer haha`;
    return request;
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },

  );
  return instance;
};

export default ApiClient();
