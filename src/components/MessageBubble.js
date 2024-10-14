import React from "react";
import { Box, Typography } from "@mui/material";

const MessageBubble = ({ message }) => {
  const isUserMessage = message.userId === "1"; 
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isUserMessage ? "flex-end" : "flex-start", 
        margin: "10px 0", 
      }}
    >
      <Box
        sx={{
          maxWidth: "95%", 
          width: "auto", 
          padding: "15px",
          borderRadius: "50px",
          backgroundColor: isUserMessage ? "#F08080" : "#E6E6FA", 
          color: isUserMessage ? "#000" : "#000", 
          boxShadow: isUserMessage
            ? "0 1px 4px rgba(173, 216, 230, 0.5)"
            : "0 1px 4px rgba(0, 0, 0, 0.2)", 
        }}
      >
        <Typography variant="body2">{message.text}</Typography>
        <Typography
          variant="caption"
          sx={{ textAlign: "right", display: "block" }}
        >
          {new Date(message.timestamp).toLocaleTimeString()}
        </Typography>
      </Box>
    </Box>
  );
};

export default MessageBubble;
