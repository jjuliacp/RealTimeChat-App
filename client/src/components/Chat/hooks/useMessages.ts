import { useQuery, useSubscription } from "@apollo/client";
import { useState, useEffect } from "react";
import { FETCH_MESSAGES } from "../../../graphql/queries";
import { Message } from "../../../types";
import { GET_MESSAGES } from "../../../graphql/subscriptions";

export const useMessages = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    const { data: initialData } = useQuery(FETCH_MESSAGES, {
        fetchPolicy: "network-only",
    });

    const { data: subscriptionData } = useSubscription(GET_MESSAGES);

    useEffect(() => {
        if (initialData?.messages) {
            setMessages(initialData.messages);
        }
    }, [initialData]);

    useEffect(() => {
        if (subscriptionData?.messageSent) {
            setMessages(prev => [...prev, subscriptionData.messageSent]);
        }
    }, [subscriptionData]);

    return { messages };
};