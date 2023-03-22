/* eslint-disable default-param-last */
const initialState = {
  chatData: {},
  activeChat: null,
  messages: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CHATS_DATA': {
      return { ...state, chatData: action.payload, messages: action.payload.messages };
    }
    case 'SET_ACTIVE_CHAT': {
      return { ...state, activeChat: action.payload };
    }
    case 'PUSH_MESSAGE': {
      return { ...state, messages: [...state.messages, action.payload] };
    }
    default:
      return state;
  }
};
