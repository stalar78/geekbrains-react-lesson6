// src/store/reducers/chatsReducer.js

const initialState = {
    chats: [
        { id: 1, name: 'Чат 1' },
        { id: 2, name: 'Чат 2' },
        { id: 3, name: 'Чат 3' },
    ],
};

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CHAT':
            const newChatId = state.chats.length + 1;
            return {
                ...state,
                chats: [...state.chats, { id: newChatId, name: `Чат ${newChatId}` }],
            };
        case 'DELETE_CHAT':
            return {
                ...state,
                chats: state.chats.filter((chat) => chat.id !== action.payload),
            };
        default:
            return state;
    }
};

export default chatsReducer;
