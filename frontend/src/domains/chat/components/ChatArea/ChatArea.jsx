import { useDispatch, useSelector } from 'react-redux';
import { setActiveChatAction } from '../../../../store/actions';

export function ChatArea() {
  const activeChat = useSelector((state) => state.activeChat);
  //   const dispatch = useDispatch();

  return (
    <div className='chat-container'>

      <h3>
        #
        {activeChat?.name}

      </h3>

      <div>activeChat.messages MESSAGES</div>
    </div>
  );
}
