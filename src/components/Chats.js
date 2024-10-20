// src/components/Chats.js
import React, { useState } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';

const Chats = () => {
    const [chats, setChats] = useState([
        { id: 1, name: 'Чат 1' },
        { id: 2, name: 'Чат 2' },
        { id: 3, name: 'Чат 3' },
    ]);

    const addChat = () => {
        const newChatId = chats.length + 1;
        setChats([...chats, { id: newChatId, name: `Чат ${newChatId}` }]);
    };

    const deleteChat = (chatId) => {
        setChats(chats.filter(chat => chat.id !== chatId));
    };

    const ChatList = () => {
        return (
            <div className="chat-list">
                <h2>🔥 Список чатов 🔥</h2>
                <ul>
                    {chats.map(chat => (
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
        const chat = chats.find(chat => chat.id === parseInt(chatId));

        const [messages, setMessages] = useState([]);
        const [newMessage, setNewMessage] = useState("");

        if (!chat) {
            return <div>⚠️ Чат не найден.</div>;
        }

        const handleSendMessage = () => {
            if (newMessage.trim() !== "") {
                setMessages([...messages, newMessage]);
                setNewMessage("");
            }
        };

        return (
            <div className="chat-content">
                <h3>💬 {chat.name}</h3>
                <div>
                    {messages.length > 0 ? (
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
