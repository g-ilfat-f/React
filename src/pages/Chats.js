import MessageList from "../components/MessageList";
import ChatList from "../components/ChatList";
import ControlPanel from "../components/ControlPanel";


const Chat = () => {
    return (
        <div className={'chats'}>
            <ChatList />
            <div>
                <MessageList />
                <ControlPanel />
            </div>
        </div>
    );
};

export default Chat;