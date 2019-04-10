const { api, updateToken } = require('./axios');

const verifyToken = async () => {
  const token = localStorage.getItem('jwt');
  if (token == null) {
    return false;
  } else {
    updateToken(token);
    return true;
  }
}

const createNewUser = async data => {
  const userData = {
    user: {
      ...data,
      company_id: 1
    }
  }
  console.log(userData);
  const respData = await api.post(`/users`, userData);
  return respData.data;
};

const editUser = async (id, edits) => {
  const respData = await api.put(`/users/${id}/`, edits);
  return respData.data;
};

const loginUser = async data => {
  const userData = {
    auth: {
      email: data.email,
      password: data.password,
    }
  }
  const respData = await api.post(`/user_token`, userData);
  updateToken(respData.data.jwt)
  return respData.data
};

const createNewTask = async user => {
  const respData = await api.post(`/`, user);
  return respData.data;
};

export {
  createNewUser,
  editUser,
  loginUser,
  createNewTask,
  verifyToken
}
