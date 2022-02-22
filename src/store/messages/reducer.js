import { DELETE_CHAT } from "../chats/actions";
import { ADD_MESSAGE, UPDATE_MESSAGES } from "./actions";

const initialState = {
    messageList: {},
};

const messagesReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            console.log(action);
            const currentList = state.messageList[action.chatId] || [];
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.chatId]: [
                        ...currentList,
                        {
                            ...action.message,
                            id: `${action.chatId}${currentList.length}`,
                        },
                    ],
                },
            };

        case DELETE_CHAT:
            return { ...state };

        case UPDATE_MESSAGES:
            console.log('msg, reducer', action);
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.chatId]: action.messages
                }
            };

        default:
            return state;
    }
};

export default messagesReduser;