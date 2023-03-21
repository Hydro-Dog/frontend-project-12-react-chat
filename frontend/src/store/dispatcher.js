import axios from 'axios';
import { fetchChatDataAction } from './actions';

export const fetchChatData = () => (dispatch) => {
  axios.get('/api/v1/data').then((response) => {
    dispatch(fetchChatDataAction(response.data));
  });
};
