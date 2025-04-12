import { useQuery, useSubscription } from "@apollo/client";
import { useEffect } from "react";
import { USER_CONNECTED, USER_DISCONNECTED } from "../../../graphql/subscriptions";
import { FETCH_USERS } from "../../../graphql/queries";

export const useUsers = () => {
    const { data, refetch } = useQuery(FETCH_USERS);

    useSubscription(USER_CONNECTED, {
        onData: () => refetch(),
    });

    useSubscription(USER_DISCONNECTED, {
        onData: () => refetch(),
    });


    useEffect(() => {
        refetch();  //  👀 Forzar refetch para actualizr users
    }, [refetch]);
    return { users: data?.users || [] };
};