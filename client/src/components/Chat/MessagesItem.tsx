// src/components/Chat/MessageItem.tsx
import { Paper, Typography } from "@mui/material";
import { Message } from "../../types";

type MessageItemProps = {
  message: Message;
  isCurrentUser: boolean;
};

export const MessageItem = ({ message, isCurrentUser }: MessageItemProps) => (
  <Paper
    sx={{
      padding: 2,
      borderRadius: isCurrentUser ? "18px 0 18px 18px" : "0 18px 18px 18px",
      maxWidth: "30%",
      marginLeft: isCurrentUser ? "auto" : "0",
      backgroundColor: isCurrentUser ? "#007bff" : "#788189",
      color: "white",
    }}
  >
    {!isCurrentUser && (
      <Typography
        variant="body2"
        sx={{
          fontWeight: "bold",
          fontSize: "0.8rem",
          color: "#1E2022",
        }}
      >
        {message.user.toUpperCase()}
      </Typography>
    )}
    <Typography variant="body1">{message.content}</Typography>
  </Paper>
);
