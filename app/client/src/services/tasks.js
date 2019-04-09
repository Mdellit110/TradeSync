const { api, updateToken } = require('./axios');

  const fetchTasks = async (trade_id) => {
    const resp = await api.get(`/trade/${trade_id}/tasks`);
    return resp.data
  }

  const createTask = async (trade_id, task) => {
    const resp = await api.post(`/trade/${trade_id}/task`, task);
    return resp.data
  }

  const setTaskToUser = async (task_id, trade_id, data) => {
    const body = {
      completed_by_id: data.user_id
    }
    const resp = await api.put(`/trade/${trade_id}/tasks/${task_id}`, body)
  }

export {
  fetchTasks,
  createTask,
  setTaskToUser
}
