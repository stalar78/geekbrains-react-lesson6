// src/store/reducers/index.js
import { combineReducers } from 'redux';
import chatsReducer from './chatsReducer';  // Убедись, что здесь путь правильный
import messagesReducer from './messagesReducer'; // То же самое здесь

const rootReducer = combineReducers({
    chats: chatsReducer,
    messages: messagesReducer,
});

export default rootReducer;
