// @ts-nocheck
import './ChatAreaInput.css';
import {
  useState, useContext, useCallback, useEffect,
} from 'react';
import { Button, TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { AppContext } from '../../../../AppContext';
import { pushMessage } from '../../../../store/actions';

export function ChatAreaInput() {
  const { socket } = useContext(AppContext);
  const [value, setValue] = useState();
  const activeChat = useSelector((state) => state.activeChat);
  const state1 = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log('state1: ', state1);

  const onChange = useCallback((e) => { setValue(e.target.value); });
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    socket.emit('newMessage', { body: value, channelId: activeChat?.id, username: '' });
  }, [value, activeChat]);

  useEffect(() => {
    socket.on('newMessage', (payload) => {
      dispatch(pushMessage(payload));
      console.log('newMessage: ', payload); // => { body: "new message", channelId: 7, id: 8, username: "admin" }
    });
  }, []);

  return (
    <div className="chat-area-input-container">
      <form onSubmit={handleSubmit} className="form-block">

        <TextField
          lue={value}
          onChange={onChange}
          variant="filled"
        />

        <Button type="submit">SEND</Button>
      </form>

    </div>
  );
}
