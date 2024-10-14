import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { receiveMessage } from './redux/chatSlice';
import ChatDisplay from './components/ChatDisplay';
import MessageInput from './components/MessageInput';
import { Box, Typography } from '@mui/material';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const simulateReceiveMessage = () => {
      setTimeout(() => {
        dispatch(receiveMessage({ text: 'Hello! How are you?', userId: '2', timestamp: new Date().toISOString() }));
      }, 3000);
    };

    simulateReceiveMessage();
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
        backgroundColor: '#f4f6f8', 
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', sm: '80%', md: '60%' },
          height: '80%', 
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'beige', 
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
       
        <Box
          sx={{
            padding: '10px',
            backgroundColor: '#F08080', 
            color: '#fff',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
            textAlign: 'center', 
          }}
        >
          <Typography variant="h6">Chat Interface</Typography>
        </Box>
        <Box
          sx={{
            flex: 1, 
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
            overflowY: 'auto', 
          }}
        >
          <ChatDisplay />
        </Box>
        <MessageInput />
      </Box>
    </Box>
  );
};

export default App;
