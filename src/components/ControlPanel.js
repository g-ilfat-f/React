import { Box, Fab, TextField } from '@mui/material';
import { Send } from '@mui/icons-material';
import PropTypes from 'prop-types';
import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addMessage } from '../store/messages/actions';


const ControlPanel = () => {
    const [value, setValue] = useState('');
    const messages = useSelector(state => state.messages.messageList);
    const profileName = useSelector(state => state.profile.name);
    const disparch = useDispatch();
    const { chatId } = useParams();

    const handleChange = useCallback((event) => {
        const valueFormInput = event.target.value;
        setValue(valueFormInput);
    }, []);

    const sendMessage = (message, author) => {
        disparch(addMessage(chatId, {
            text: message,
            author: author
        }));
        setValue('');
    };

    const handleButton = () => {
        sendMessage(value, profileName);
    };

    useEffect(() => {
        let timer;
        const currentChat = messages[chatId];
        if (currentChat?.length > 0 && currentChat[currentChat?.length - 1]?.author === profileName) {
            timer = setInterval(() => {
                const currentMessage = 'Привет!';
                sendMessage(currentMessage, 'bot');
            }, 1000)
        }
        return () => {
            clearTimeout(timer);
        };
    }, [messages[chatId]]);


    return <>
        <Box
            sx={{
                marginTop: '20px'
            }}
            component='from'
            noValidate
            autoComplete='off'
            flexDirection='row'
            justifyContent='space-between'
        >
            <TextField
                autoFocus
                style={{ margin: '0 20px' }}
                id='outlined-basic'
                label='Введите сообщение'
                variant='filled'
                value={value}
                onChange={handleChange}
            />
            <Fab onClick={handleButton} color='primary'><Send /></Fab>
        </Box>
    </>
};

ControlPanel.propTypes = {
    value: PropTypes.string,
    handleChange: PropTypes.func,
    handleSend: PropTypes.func
};

export default ControlPanel;