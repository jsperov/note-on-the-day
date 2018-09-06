const PORT = 8050;
const HOST = 'http://89.223.92.3';

export const API = {
  BASE: `${HOST}:${PORT}/api`,
  TASK: {
    BASE: () => `${API.BASE}/tasks`,
    GET_TASK: ({ id }) => `${API.BASE}/task:${id}`,
  },
};
