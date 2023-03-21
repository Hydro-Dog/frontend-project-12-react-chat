// @ts-nocheck
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchChatData } from '../../store/dispatcher';
import './ChatPage.css';
import { ChatArea } from './components/ChatArea/ChatArea';
import { LeftBar } from './components/Leftbar/LeftBar';

export function ChatPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChatData());
  }, []);

  return (
    <div className="chat-container">
      <div className="chat-content">
        <LeftBar />
        <ChatArea />
      </div>
    </div>
  );
}
