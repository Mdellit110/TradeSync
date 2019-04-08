const { api, updateToken } = require('./axios');


const createNewUser = async user => {
  const respData = await api.post(`/users/`, user);
  return respData.data;
};

const editUser = async (id, edits) => {
  const respData = await api.put(`/users/${id}/`, edits);
  return respData.data;
};

const loginUser = async user => {
  const respData = await api.post(`/users/`, user);
  return respData.data;
};

const createNewTask = async user => {
  const respData = await api.post(`/users/`, user);
  return respData.data;
};

export {
  createNewUser,
  editUser,
  loginUser,
  createNewTask
}
