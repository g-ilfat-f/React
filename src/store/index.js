import profileReducer from './profile/profileReducer';
import { combineReducers, createStore } from 'redux';
import chatsReducer from './chats/reducer';
import messagesReduser from './messages/reducer';

const allReducers = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReduser
});

export const store = createStore(allReducers, window.__REDUC_DEVTOOLS_EXENSION__ &&
    window.__REDUC_DEVTOOLS_EXENSION__());
