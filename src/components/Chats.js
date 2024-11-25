import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import { getChats } from '../store/reducers/chatsSelectors';
import { getMessagesByChatId } from '../store/reducers/messagesSelectors';

const Chats = () => {
    const chats = useSelector(getChats);
    const dispatch = useDispatch();

    const addChat = () => {
        dispatch({ type: 'ADD_CHAT' });
    };

    const deleteChat = (chatId) => {
        dispatch({ type: 'DELETE_CHAT', payload: chatId });
    };

    const ChatList = () => {
        return (
            <div className="chat-list">
                <h2>🔥 Список чатов 🔥</h2>
                <ul>
                    {chats.map((chat) => (
                        <li key={chat.id}>
                            <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
                            <button onClick={() => deleteChat(chat.id)}>❌ Удалить</button>
                        </li>
                    ))}
                </ul>
                <button onClick={addChat}>➕ Добавить новый чат</button>
            </div>
        );
    };

    const Chat = () => {
        const { chatId } = useParams();
        const messages = useSelector((state) => getMessagesByChatId(state, chatId));
        const [newMessage, setNewMessage] = React.useState("");

        const handleSendMessage = () => {
            if (newMessage.trim() !== "") {
                dispatch({
                    type: 'ADD_MESSAGE',
                    payload: { chatId, message: newMessage },
                });
                setNewMessage("");
            }
        };

        if (!chats.find((chat) => chat.id === parseInt(chatId))) {
            return <div>⚠️ Чат не найден.</div>;
        }

        return (
            <div className="chat-content">
                <h3>💬 {chats.find((chat) => chat.id === parseInt(chatId)).name}</h3>
                <div>
                    {messages && messages.length > 0 ? (
                        messages.map((msg, index) => (
                            <div key={index} className="message">
                                {msg}
                            </div>
                        ))
                    ) : (
                        <p>🤷‍♂️ Сообщений пока нет</p>
                    )}
                </div>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Введите сообщение"
                />
                <button onClick={handleSendMessage}>🚀 Отправить</button>
            </div>
        );
    };

    return (
        <div className="chat-container">
            <ChatList />
            <Routes>
                <Route path=":chatId" element={<Chat />} />
                <Route path="" element={<div>👉 Пожалуйста, выберите чат.</div>} />
            </Routes>
        </div>
    );
};

export default Chats;
