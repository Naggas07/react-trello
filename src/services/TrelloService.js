import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:5000'
});

const getColumns = () => http.get('/columns').then(response => response.data);
const createColumns = (column) => http.post('/columns', column)
const deleteColumn = (columnId) => http.delete(`/columns/${columnId}`)

export default {
  getColumns,
  createColumns,
  deleteColumn
};