import http from './http';

const api = {
  getPosts: params => {
    return http.get('/posts', { params });
  },
  getPages: () => {
    return http.get('/pages');
  },
};
export default api;
