import { Box, Fab, TextField } from '@mui/material';
import { Send } from '@mui/icons-material';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addMessageSaga } from '../store/messages/actions';


const ControlPanel = () => {
    const [value, setValue] = useState('');
    const profileName = useSelector(state => state.profile.name);
    const dispatch = useDispatch();
    const { chatId } = useParams();

    const handleChange = useCallback((event) => {
        const valueFormInput = event.target.value;
        setValue(valueFormInput);
    }, [value]);

    const handleButton = useCallback(() => {
        dispatchEvent(addMessageSaga(chatId, {
            text: value,
            author: profileName
        }));
        setValue('');
    }, [value, chatId, dispatch]);

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