import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:5000'
});

const getColumns = () => http.get('/columns').then(response => response.data);
const getColumn = (id) => http.get(`/columns/${id}`)
const createColumns = (column) => http.post('/columns', column)
const deleteColumn = (columnId) => http.delete(`/columns/${columnId}`)

const createCard = (card) => http.post('/cards', card)

export default {
  getColumns,
  createColumns,
  deleteColumn,
  getColumn,
  createCard
};