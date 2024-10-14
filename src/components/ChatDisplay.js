import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import MessageBubble from './MessageBubble';

const ChatDisplay = () => {
  const messages = useSelector((state) => state.chat.messages);

  useEffect(() => {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }, [messages]);

  return (
    <Box
      id="chatWindow"
      sx={{
        height: '400px',
        overflowY: 'auto',
        padding: '16px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundImage: 'url("./chat.jpg")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        margin: '30px',
      }}
    >
      {messages.map((msg, index) => (
        <MessageBubble key={index} message={msg} />
      ))}
    </Box>
  );
};

export default ChatDisplay;
