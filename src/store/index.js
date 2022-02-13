import profileReducer from './profile/profileReducer';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import chatsReducer from './chats/reducer';
import messagesReduser from './messages/reducer';
import gistsReducer from './gists/reducer';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
    key: 'rot',
    storage,
}

const allReducers = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReduser,
    gists: gistsReducer
});

const persistedReducer = persistReducer(persistConfig, allReducers);


export const store = createStore(persistedReducer,
    composeEnhancers(applyMiddleware(thunk)));

//sagaMiddleware.run(mySaga);

export const persistor = persistStore(store);
