import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveChatAction } from '../../../../store/actions';

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
    <div>
      <h2>CHANNELS</h2>
      <ul className="">
        {chatData.channels?.map((item) => (
          <li key={item.id} className="chats-list-item">
            <div onClick={() => onChatItemClick(item)}>{item.name}</div>
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
