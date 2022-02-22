export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const ADD_MESSAGE_WITH_SAGA = 'MESSAGES::ADD_MESSAGE_WITH_SAGA';
export const UPDATE_MESSAGES = 'MESSAGES::UPDATE_MESSAGES';

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    chatId,
    message
});

export const addMessageSaga = (chatId, message) => ({
    type: ADD_MESSAGE_WITH_SAGA,
    chatId,
    message
});

export const addMessageWithThunk = (chatId, message) => (dispatch, getState) => {
    dispatch(addMessage(chatId, message));

    if (message.author !== 'bot') {
        const botMessage = { text: 'привет я бот', author: 'bot' };
        setTimeout(() => {
            dispatch(addMessage(chatId, botMessage));
        }, 1500);
    }
};

export const updateMessages = (chatId, messages) => ({
    type: UPDATE_MESSAGES,
    chatId,
    messages
})