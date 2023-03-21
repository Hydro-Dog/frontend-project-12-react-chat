// @ts-nocheck
import { useSelector } from 'react-redux';
import './ChatArea.css';
import { ChatAreaHeader } from '../ChatAreaHeader/ChatAreaHeader';
import { ChatAreaInput } from '../ChatAreaInput/ChatAreaInput';
import { ChatMessages } from '../ChatMessages/ChatMessages';

export function ChatArea() {
  const activeChat = useSelector((state) => state.activeChat);

  return (
    <div className="chat-area-container">

      <ChatAreaHeader chatName={activeChat?.name} messagesCount="messagesCount" />
      <ChatMessages />
      <ChatAreaInput />
    </div>
  );
}
