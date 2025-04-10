import { useEffect, useState } from "react";
import { useQuery, useSubscription } from "@apollo/client";
import { FETCH_MESSAGES } from "../graphql/queries";
import { GET_MESSAGES } from "../graphql/subscriptions";
import { Box, Paper, Typography } from "@mui/material";

type MessagesProps = {
  user: string;
};

type Message = {
  id: string;
  user: string;
  content: string;
};

const Messages = ({ user }: MessagesProps) => {
  const [allMessages, setAllMessages] = useState<Message[]>([]);
  const { data: initialData } = useQuery(FETCH_MESSAGES, {
    fetchPolicy: "network-only", // ✅ Obliga a traer datos frescos del servidor
  });

  useEffect(() => {
    if (initialData?.messages) {
      setAllMessages(initialData.messages);
    }
  }, [initialData]);

  const { data: subscriptionData } = useSubscription(GET_MESSAGES);

  useEffect(() => {
    if (subscriptionData?.messageSent) {
      setAllMessages((prev) => {
        const updatedMessages = [...prev, subscriptionData.messageSent];
        return updatedMessages;
      });
    }
  }, [subscriptionData]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {allMessages.map((msg) => (
        <Paper
          key={msg.id}
          sx={{
            padding: 2,
            borderRadius: "20px",
            maxWidth: "30%",
            marginLeft: msg.user === user ? "auto" : "0",
            backgroundColor: msg.user === user ? "#007bff" : "#f0f0f0",
            color: msg.user === user ? "white" : "black",
          }}
        >
          {user !== msg.user && (
            <Typography
              variant="body2"
              sx={{
                fontWeight: "bold",
                color: "gray",
                borderRadius: "50%",
                backgroundColor: "#e0e0e0",
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {msg.user.slice(0, 2).toUpperCase()}
            </Typography>
          )}
          <Typography variant="body1">{msg.content}</Typography>
        </Paper>
      ))}
    </Box>
  );
};
export default Messages;
