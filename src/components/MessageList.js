import { Avatar, ListItemAvatar, ListItemText, Box, List, ListItem } from "@mui/material";
import React, { useCallback } from "react";
import { PropTypes } from 'prop-types';
import { Adb, Face } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";



const MessageList = () => {
    const profileName = useSelector(state => state.profile.name);
    const messages = useSelector(state => state.messages.messageList);
    let { chatId } = useParams();
    const getMessagesById = messages[chatId];

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
                {getMessagesById?.map((message, index) => renderMessage(message, index))}
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