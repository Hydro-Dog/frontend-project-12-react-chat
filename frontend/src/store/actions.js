export const fetchChatDataAction = (data) => ({
  type: 'FETCH_CHATS_DATA',
  payload: { ...data },
});

export const setActiveChatAction = (data) => ({
  type: 'SET_ACTIVE_CHAT',
  payload: { ...data },
});
