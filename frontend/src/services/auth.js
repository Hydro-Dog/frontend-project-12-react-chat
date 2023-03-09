import axios from 'axios';

export const authorize = ({ username, password }) => axios.post('/api/v1/login', { username, password });
