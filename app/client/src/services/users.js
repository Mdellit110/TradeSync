const { api, updateToken } = require('./axios');


const createNewUser = async data => {
  const userData = {
    user: {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
      phone_number: data.phone_number,
      is_boss: data.is_boss,
      trade_id: 1,
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
  createNewTask
}
