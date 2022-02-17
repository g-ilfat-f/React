import { Button, Dialog, TextField, DialogTitle } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Delete, StackedLineChartSharp } from '@mui/icons-material';
import { getDatabase, ref, push, set, get, child, remove } from 'firebase/database';
import firebase from '../service/firebase';
import { useSelector } from 'react-redux';

const ChatList = () => {
    const [chats, setChats] = useState([]);
    const { chatId } = useParams();
    const [visible, setVisible] = useState(false);
    const [newChatName, setNewChatName] = useState('');

    const handleOpen = () => {
        setVisible(true);
    };

    const handleClose = () => {
        setVisible(false);
    };

    const handleChange = (e) => setNewChatName(e.target.value);

    const onAddChat = () => {
        const db = getDatabase(firebase);
        const chatRef = ref(db, '/chats');
        const newChatRef = push(chatRef);
        set(newChatRef, { name: newChatName }).then((res) => { console.log(res) })

        setNewChatName('');
        handleClose();
    };

    const handleDelete = (id) => {
        const db = getDatabase(firebase);
        const chatRef = ref(db, '/chats/${id}');
        const messagesRef = ref(db, '/messages/${id}');
        remove(chatRef).then(res => console.log('removed chat', res));
        remove(messagesRef).then(res => console.log('removed msg'));
    };

    useEffect(() => {
        const db = getDatabase(firebase);
        const dbRef = ref(db);
        get(child(dbRef, '/chats')).then((snapshot) => {
            if (snapshot.exists()) {
                const obj = snapshot.val();
                const chatIds = Object.keys(obj);
                const chatArr = chatIds.map(item => ({ id: item, name: obj[item].name }))
                StackedLineChartSharp(chatArr);
            } else {
                console.log('no data')
            }
        });
    }, []);

    return (
        <div className={'chatList'}>
            {chats.map((chat, index) => (
                <div key={index}>
                    <Link to={`/chats/${chat.id}`}>
                        <b style={{ color: chat.id === chatId ? 'black' : 'grey' }}>
                            {chat.name}
                        </b>
                        <Button onClick={() => handleDelete(chat.id)}>
                            <Delete />
                        </Button>
                    </Link>
                </div>
            ))}
            <div>
                <Button onClick={handleOpen}>Добавить чат</Button>
                <Dialog open={visible} onClose={handleClose}>
                    <DialogTitle>Пожалуйста, введите имя чата!</DialogTitle>
                    <div className={'chatNameBox'}>
                        <TextField value={newChatName} onChange={handleChange} />
                        <Button onClick={onAddChat} disabled={!newChatName}>Добавить чат</Button>
                    </div>
                </Dialog>
            </div>
        </div>
    );
};

export default ChatList;