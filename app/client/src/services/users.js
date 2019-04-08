const { api, updateToken } = require('./axios');


const createNewUser = async data => {
  const user = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
      phone_number: data.phone_number,
      is_boss: data.is_boss,
      trade_id: 1,
      company_id: 1
  }
  console.log(user);
  const respData = await api.post(`/users`, user);
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
  const respData = await api.post(`/users`, user);
  return respData.data;
};

export {
  createNewUser,
  editUser,
  loginUser,
  createNewTask
}
