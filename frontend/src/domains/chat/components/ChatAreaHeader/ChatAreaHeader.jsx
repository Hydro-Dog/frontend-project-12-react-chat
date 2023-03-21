// @ts-nocheck
import './ChatAreaHeader.css';

export function ChatAreaHeader({ chatName, messagesCount }) {
  return (
    <div className="chat-area-header">
      <h3>
        #
        {chatName}
      </h3>

      <div>
        {messagesCount}
        MESSAGES
      </div>
    </div>
  );
}
