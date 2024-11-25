// src/store/reducers/chatsSelectors.js
export const getChats = (state) => state.chats ? state.chats.chats : [];
