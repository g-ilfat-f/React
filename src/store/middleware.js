import { addMessage, ADD_MESSAGE } from './messages/actions';

const middleware = store => next => action => {
    if (action.type === ADD_MESSAGE && action.message.author !== 'bot') {
        const botMessage = { text: 'Привет я бот', author: 'bot' };
        setTimeout(() => {
            store.dispatch(addMessage(action.chatId, botMessage))
        }, 1500);
    }

    return next(action);
}

export default middleware;