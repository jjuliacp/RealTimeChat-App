import { Box, Stack, Paper, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import UserList from "./UserList";
import { useMessages } from "./hooks/useMessages";
import { useChat } from "./hooks/UseChat";
import Messages from "./Messages";

const Chat = () => {
  const { messages } = useMessages();
  const { user, message, setMessage, handleSendMessage, handleLogout } =
    useChat();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#e3f2fd",
        display: "flex",
      }}
    >
      <Box sx={{ width: "40%" }}>
        <UserList />
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            p: 2,
          }}
        >
          <Messages messages={messages} currentUser={user} />
        </Box>
        <Paper
          sx={{
            padding: 2,
            borderRadius: "20px",
            backgroundColor: "#f0f0f0",
            m: 2,
          }}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Logged in as:
            </Typography>
            <Typography variant="body1">{user}</Typography>
            <CloseIcon
              onClick={handleLogout}
              sx={{ cursor: "pointer", color: "red" }}
            />
          </Stack>
          <Stack direction="row" sx={{ mt: 2 }} spacing={2}>
            <TextField
              fullWidth
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === "Enter") handleSendMessage();
              }}
            />

            <SendIcon onClick={handleSendMessage} />
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
};

export default Chat;
