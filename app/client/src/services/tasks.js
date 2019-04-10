const { api, updateToken } = require('./axios');

  const fetchTasks = async (trade_id) => {
    const resp = await api.get(`/trade/${trade_id}/tasks`);
    return resp.data
  }

  const createTask = async (trade_id, tasks) => {
    const data = {
      tasks
    }
    const resp = await api.post(`/trade/${trade_id}/task`, data);
    return resp.data
  }

  const setTaskToUser = async (task_id, trade_id, body) => {
    const task = {
      tasks: {
        user_id: body.user_id,
        id: task_id,
        start_time: body.start_time
      }
    }
    const resp = await api.put(`/users/${body.user_id}/tasks/${task_id}`, task)
  }
  const completeTask = async (task_id, trade_id, body) => {
    const task = {
      tasks: {
        end_time: body.end_time,
        is_complete: body.is_complete
      }
    }
    const resp = await api.put(`/trade/${trade_id}/tasks/${task_id}`, task)
  }

export {
  fetchTasks,
  createTask,
  setTaskToUser,
  completeTask
}
