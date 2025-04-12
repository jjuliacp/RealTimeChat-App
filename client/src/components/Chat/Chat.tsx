import {
  Box,
  Stack,
  TextField,
  Typography,
  Avatar,
  Divider,
  Button,
} from "@mui/material";
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
        backgroundColor: "#e3f2fd",
        minHeight: "100vh",
        boxSizing: "border-box",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1280px",
          height: {
            xs: "100vh",
            md: "720px",
          },
          display: "flex",
          boxShadow: 3,
          backgroundColor: "#fff",
          borderRadius: 2,
          overflow: "hidden",
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "25%",
            },
            display: "flex",
            flexDirection: "column",
            borderRight: "1px solid #e0e0e0",
            borderBottom: {
              xs: "1px solid #e0e0e0",
              md: "none",
            },
          }}
        >
          <Box
            sx={{
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "sticky",
              top: 0,
              zIndex: 10,
              backgroundColor: "#fff",
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar sx={{ bgcolor: "#cfd8dc", width: 40, height: 40 }}>
                {user.charAt(0).toUpperCase()}
              </Avatar>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "0.9rem",
                }}
              >
                {user}
              </Typography>
            </Stack>
            <Button
              variant="text"
              startIcon={<CloseIcon />}
              onClick={handleLogout}
              sx={{ textTransform: "none" }}
            >
              Logout
            </Button>
          </Box>
          <Divider />

          <UserList />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            minHeight: 0,
          }}
        >
          <Box
            sx={{
              flex: 1,
              minHeight: 0,
              overflowY: "auto",
              p: 2,
              mt: 2,
            }}
          >
            <Messages messages={messages} currentUser={user} />
          </Box>
          <Box
            sx={{
              px: 2,
              pb: 2,
            }}
          >
            <Stack
              direction="row"
              sx={{ mt: 2, alignItems: "center", color: "#1E2022" }}
              spacing={2}
            >
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
