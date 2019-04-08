const { api, updateToken } = require('./axios');

  const fetchTrades = async () => {
    const resp = await api.get('/trade/');
    return resp.data
  }

export {
  fetchTrades,
}
