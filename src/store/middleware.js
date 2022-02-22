import { API_URL_PUBLIC } from '../contants/endpoints';
import { getGistsFailure, getGistsRequest, getGistsSuccess } from './gists/actions';
import { onValue, getDatabase, push, ref, remove, set } from 'firebase/database';
import firebase from '../service/firebase';
import { updateMessages } from './messages/actions';

export const getAllGists = () => async (dispatch) => {
    dispatch(getGistsRequest());

    try {
        const res = await fetch(API_URL_PUBLIC);

        if (!res.ok) {
            throw new Error(`Request failed with status ${res.status}`);
        }
        const result = await res.json();

        dispatch(getGistsSuccess(result));
    } catch (err) {
        dispatch(getGistsFailure(err.message));
    }
};

export const addChatWithFB = (name) => async () => {
    const db = getDatabase(firebase);
    const chatRef = ref(db, '/chats');
    const newChatRef = push(chatRef);
    set(newChatRef, { name: name }).then((res) => {
        console.log(res);
    });
};

export const deleteChatWithFB = (id) => async () => {
    const db = getDatabase(firebase);
    const chatRef = ref(db, `/chats/${id}`);
    const messagesRef = ref(db, `/messages/${id}`);
    remove(chatRef).then(res => console.log('removed chat', res));
    remove(messagesRef).then(res => console.log('removed msg', res));
};

export const getMessagesByChatIdWithFB = (chatId) => async (dispatch) => {
    const db = getDatabase(firebase);
    const msgRef = ref(db, `/messages/${chatId}`);

    onValue(msgRef, (snapshot) => {
        const data = snapshot.val();
        const msg = Object.values(data);
        if (msg.length > 0) {
            dispatch(updateMessages(chatId, msg));
        }
    });
};


