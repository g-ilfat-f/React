import { ADD_CHAT, DELETE_CHAT } from "./actions";

const initialState = {
    chatList: [],
};

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                shatList: [
                    ...state.chatList,
                    {
                        id: `id${state.chatList.length}`,
                        name: action.name,
                    },
                ],
            }
        case DELETE_CHAT:
            return {
                ...state,
                chatList: [
                    ...state.chatList.slice(0, action.index),
                    ...state.chatList.slice(action.index + 1)
                ]
            }
            
        default:
            return state;
    }
};

export default chatsReducer;
