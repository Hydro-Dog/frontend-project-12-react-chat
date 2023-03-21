import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveChatAction } from '../../store/actions';
import { fetchChatData } from '../../store/dispatcher';
import './ChatPage.css';
import { ChatArea } from './components/ChatArea/ChatArea';
import { LeftBar } from './components/Leftbar/LeftBar';

export function ChatPage() {
  const dispatch = useDispatch();
  // const chatData = useSelector((state) => state.chatData);
  // const activeChat = useSelector((state) => state.activeChat);

  useEffect(() => {
    dispatch(fetchChatData());
  }, []);

  // const onChatItemClick = (chatItem) => {
  //   dispatch(setActiveChatAction(chatItem));
  // };

  return (
    <div className="container">
      <LeftBar />
      <ChatArea />
    </div>
  );
}
