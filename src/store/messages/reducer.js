import { ADD_MESSAGE } from "./actions";

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
        default:
            return state;
    }
};

export default messagesReduser;