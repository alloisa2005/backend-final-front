import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/'
});

export const getDestacados = async () => {  
  const resp = await api.get('/api/productos');
  return resp.data.result;
}