// src/store/reducers/messagesSelectors.js

export const getMessagesByChatId = (state, chatId) => state.messages.messages[chatId];
