// @ts-nocheck
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { setActiveChatAction } from '../../../../store/actions';
import './LeftBar.css';

export function LeftBar() {
  const chatData = useSelector((state) => state.chatData);
  const activeChat = useSelector((state) => state.activeChat);
  const dispatch = useDispatch();

  const onChatItemClick = (chatItem) => {
    dispatch(setActiveChatAction(chatItem));
  };

  useEffect(() => {
    if (!activeChat && chatData.channels?.length) {
      dispatch(setActiveChatAction(chatData.channels[0]));
    }
  }, [chatData, activeChat]);

  return (
    <div className="leftbar-container">
      <div className="leftbar-header">
        <h2 className="chats-list-title">CHANNELS</h2>
        <Button>ADD</Button>
      </div>
      <ul className="chats-list">
        {chatData.channels?.map((item) => (
          <li key={item.id} className="chats-list-item">
            <div onClick={() => onChatItemClick(item)}>
              #
              {item.name}
            </div>
            {item.removable && (
            <>
              <div>X</div>
              <div>E</div>
            </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
