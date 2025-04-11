// src/components/Chat/hooks/useUsers.ts
import { useQuery, useSubscription } from "@apollo/client";
import { useState, useEffect } from "react";
import { User } from "../../../types";
import { USER_CONNECTED, USER_DISCONNECTED } from "../../../graphql/subscriptions";
import { FETCH_USERS } from "../../../graphql/queries";

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const { data: initialData, refetch } = useQuery(FETCH_USERS);

    useSubscription(USER_CONNECTED, {
        onData: () => refetch(),
    });

    useSubscription(USER_DISCONNECTED, {
        onData: () => refetch(),
    });

    useEffect(() => {
        if (initialData?.users) {
            setUsers(initialData.users);
        }
    }, [initialData]);

    return { users };
};