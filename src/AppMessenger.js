import './App.scss';
import React, { useCallback, useEffect, useState, useRef } from 'react';
import { Box } from '@mui/material';
import MessageList from './components/MessageList';
import ControlPanel from './components/ControlPanel';




function AppMessenger() {
  const [ messageList, setMessageList ] = useState([]);
  const [value, setValue] = useState('');
  
  const handleChange = useCallback((event) => {
    const valueFormInput = event.target.value;
    setValue(valueFormInput);
  }, []);
  
  const handleSend = () => {
    setMessageList([...messageList, { text: value, author: 'me' }]);
    setValue('');
  };
  
  useEffect(() => {
    let timer;
    if (messageList.length > 0 && messageList[messageList.length - 1].author === 'me') {
      timer = setInterval(() => {
        const currntMessage = botNet.length > 0 ? botNet.shift() : 'Привет!';
        setMessageList([...messageList, {
          text: currntMessage,
          author: 'bot'
        }]);
      }, 1000)
    }
    
    return () => {
      clearTimeout(timer);
    };
  }, [messageList]);


  return (
    <Box className={'appBox'}>
      <MessageList messageList={messageList} />
      <ControlPanel handleSend={handleSend} handleChange={handleChange} value={value} />
    </Box>
  );
}


export default AppMessenger;
