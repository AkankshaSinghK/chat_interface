
import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { sendMessage } from "../redux/chatSlice";

const MessageInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSend = () => {
    if (text.trim() !== "") {
      dispatch(
        sendMessage({ text, userId: "1", timestamp: new Date().toISOString() })
      );
      setText("");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        padding: "10px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 10px rgba(0, 128, 0, 0.5)", 
        borderRadius: '50px',
        margin: "30px",
      }}
    >
      <TextField
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message"
        sx={{
          width: '70%', 
          '& .MuiOutlinedInput-root': {
            borderRadius: '25px',
            '& fieldset': {
              borderColor: 'transparent',
            },
            '&:hover fieldset': {
              borderColor: 'transparent', 
            },
            '&.Mui-focused fieldset': {
              borderColor: 'green', 
              boxShadow: '0 0 5px green',
            },
          },
          marginRight: "40px", 
        }}
      />
      <Button
        variant="contained"
        color="success"
        onClick={handleSend}
        sx={{
          borderRadius: '25px', 
          padding: '10px 20px',
          width: '20%', 
        }}
      >
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;
