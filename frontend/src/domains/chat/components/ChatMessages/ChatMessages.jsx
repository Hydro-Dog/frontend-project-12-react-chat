// @ts-nocheck
import './ChatMessages.css';
import { useSelector } from 'react-redux';

export function ChatMessages() {
  const messages = useSelector((state) => state.messages);
  return (
    <div className="chat-messages-container">

      {messages.map((item) => (
        <div className="message-container">
          <div>
            username:
            {item.username}
          </div>
          <div>
            {item.body}
          </div>
        </div>
      ))}
    </div>
  );
}
