import { Avatar, ListItemAvatar, ListItemText, Box, List, ListItem } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { PropTypes } from 'prop-types';
import { Adb, Face } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDatabase, get, ref, child } from 'firebase/database';
import firebase from "../service/firebase";



const MessageList = () => {
    const [messages, setMessages] = useState([]);
    const profileName = useSelector(state => state.profile.name);
    let { chatId } = useParams();

    useEffect(() => {
        const db = getDatabase(firebase);
        const dbRef = ref(db)
        get(child(dbRef, `/messages/${chatId}`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const msg = Object.values(snapshot.val());
                    setMessages(msg)
                } else {
                    console.error('error')
                }
            });
    }, [chatId]);

    const renderMessage = useCallback((message, index) => {
        return (
            <ListItem
                button
                key={index}
            >
                <ListItemAvatar>
                    <Avatar sx={{ backgroundColor: message.author === 'bot' ? 'orange' : '#1d46ad' }}>
                        {message.author !== profileName ? <Adb /> : <Face />}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={message.text} secondary={message.author} />
            </ListItem>
        )
    }, [profileName]);

    return (
        <Box
            sx={{
                width: 300,
                height: 600,
                border: '1px solid black',
                overflow: 'auto'
            }}>
            <List sx={{ md: 2 }}>
                {messages.map((message, index) => renderMessage(message, index))}
            </List>
        </Box>
    );
};

MessageList.propTypes = {
    messageList: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        author: PropTypes.string
    }))
}

export default MessageList;