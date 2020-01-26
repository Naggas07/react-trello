import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:5000'
});

const getColumns = () => http.get('/columns').then(response => response.data);
const createColumns = (data) => http.post('/columns').then(response => response.data )

export default {
  getColumns,
  createColumns
};