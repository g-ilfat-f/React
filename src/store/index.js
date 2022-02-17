import profileReducer from './profile/profileReducer';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import chatsReducer from './chats/reducer';
import messagesReduser from './messages/reducer';
import gistsReducer from './gists/reducer';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const allReducers = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReduser,
    gists: gistsReducer
});

export const store = createStore(allReducers,
    composeEnhancers(applyMiddleware(thunk)));

