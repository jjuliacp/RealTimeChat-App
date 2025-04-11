import { Box } from "@mui/material";
import { Message } from "../../types";
import { useEffect, useMemo, useRef } from "react";
import { MessageItem } from "./MessagesItem";

type MessagesProps = {
  messages: Message[];
  currentUser: string;
};

const Messages = ({ messages, currentUser }: MessagesProps) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const memoizedMessages = useMemo(
    () =>
      messages.map((msg) => (
        <MessageItem
          key={msg.id}
          message={msg}
          isCurrentUser={msg.user === currentUser}
        />
      )),
    [messages, currentUser]
  );

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {memoizedMessages}
      <div ref={bottomRef} />
    </Box>
  );
};
export default Messages;
