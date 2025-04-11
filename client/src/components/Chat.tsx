import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { POST_MESSAGE } from "../graphql/mutations";
import Messages from "./Messages";
import { Box, Stack, Paper, TextField, Button } from "@mui/material";

const Chat = () => {
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");
  const [sendMessage] = useMutation(POST_MESSAGE);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser.name);
    }
  }, []);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      sendMessage({ variables: { content: message, user } });
      setMessage("");
    }
  };

  return (
    <Box>
      <Messages user={user} />
      <Paper
        sx={{
          padding: 2,
          borderRadius: "20px",
          backgroundColor: "#f0f0f0",
          m: 2,
        }}
      >
        <Stack direction="row" spacing={2}>
          <TextField
            label="User"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            fullWidth
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
          <Button variant="contained" onClick={handleSendMessage}>
            Enviar
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Chat;
