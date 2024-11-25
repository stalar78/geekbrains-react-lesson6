// src/store/reducers/messagesReducer.js

const initialState = {
    messages: {
        1: [],
        2: [],
        3: [],
    },
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            const { chatId, message } = action.payload;
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [chatId]: [...state.messages[chatId], message],
                },
            };
        default:
            return state;
    }
};

export default messagesReducer;
