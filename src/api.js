import axios from 'axios';

const PORT = 80;
const HOST = 'http://89.223.92.3';

export const API = {
  getData: () => axios(`${HOST}:${PORT}`).then(res => console.log(res)),
};
