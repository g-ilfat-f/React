import { put, delay, takeLatest } from 'redux-saga/effects';
import { ADD_MESSAGE_WITH_SAGA, addMessage } from './messages/actions';

function* onAddMessageWithSaga(action) {
    yield put(addMessage(action.chatId, action.message));
    if (action.message.author !== 'bot') {
        const botMessage = { text: 'привет, я из Саги!', author: 'bot' };
        yield DelayNode(2000);
        yield put(addMessage(action.chatId, botMessage));
    }
}

function* mySaga() {
    yield takeLatest(ADD_MESSAGE_WITH_SAGA, onAddMessageWithSaga);
}

export default mySaga;