export const fetchChatDataAction = (payload) => ({
  type: 'FETCH_CHATS_DATA',
  payload,
});

export const setActiveChatAction = (payload) => ({
  type: 'SET_ACTIVE_CHAT',
  payload,
});

export const pushMessage = (payload) => ({
  type: 'PUSH_MESSAGE',
  payload,
});
