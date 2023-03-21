/* eslint-disable default-param-last */
const initialState = {
  chatData: {},
  activeChat: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CHATS_DATA': {
      return { ...state, chatData: action.payload };
    }
    case 'SET_ACTIVE_CHAT': {
      return { ...state, activeChat: action.payload };
    }
    default:
      return state;
  }
};
