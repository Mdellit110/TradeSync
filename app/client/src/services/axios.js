import axios from 'axios';
const api = axios.create({
  baseURL: "http://localhost:3000"
});

const updateToken = (token) => {
  localStorage.setItem('jwt', token);
  api.defaults.headers.common.authorization = `Bearer ${token}`;
};

export {
  api,
  updateToken
}
